import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { queryClient } from "./query";
import "./app.css";

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MemoryRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div className="text-3xl bg-black text-white h-screen w-screen flex items-center justify-center">
								Hi
							</div>
						}
					/>
				</Routes>
			</MemoryRouter>
		</QueryClientProvider>
	);
}
