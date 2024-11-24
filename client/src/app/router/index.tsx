import { createBrowserRouter } from "react-router-dom";

import { NON_AUTH } from "./auth"

export const router = createBrowserRouter([
    ...NON_AUTH
])