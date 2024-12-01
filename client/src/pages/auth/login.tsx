import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import ky from "ky";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "~shared/shadcn/components/ui";
import { END_POINT_USERS } from "~shared/constants";
import { Link } from "react-router";

const formSchema = z.object({
	userid: z.string().min(2, {
		message: "User ID must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Password must be at least 2 characters.",
	}),
});

type FormData = z.infer<typeof formSchema>;

function Login() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			userid: "",
			password: "",
		},
	});

	const onSubmit = async (data: FormData) => {
		await ky.post(`${END_POINT_USERS}login`, {
			json: data,
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
				<FormField
					control={form.control}
					name="userid"
					render={({ field }) => (
						<FormItem className="mb-3">
							<FormLabel>User ID</FormLabel>
							<FormControl>
								<Input placeholder="User ID" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="mb-5">
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="Password" type="password" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="mb-3" type="submit">
					Submit
				</Button>
				<div>
					<span className="mr-2">Don't have an account?</span>
					<Link className="hover:underline" to="/create-account">
						Create account
					</Link>
				</div>
			</form>
		</Form>
	);
}

export default Login;
