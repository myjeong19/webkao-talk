import { createBrowserRouter } from "react-router";

import { AUTH_ROUTES } from "./auth";

export const router = createBrowserRouter([...AUTH_ROUTES]);
