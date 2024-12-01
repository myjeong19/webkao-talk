import CreateAccount from "~pages/auth/create-account";
import Login from "~pages/auth/login";
import Logout from "~pages/auth/logout";

export const AUTH_ROUTES = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/logout",
		element: <Logout />,
	},
	{
		path: "/create-account",
		element: <CreateAccount />,
	},
];
