import { createContext } from "react";

export const UserContext = createContext({
    name: "",
    email: "",
    token: "",
    isLoggedIn: false
});
