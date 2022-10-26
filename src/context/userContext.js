import { createContext, useState } from "react";

export const UserContext = createContext({
    name: "",
    email: "",
    isLoggedIn: false
});

const User = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        isLoggedIn: false
    });

    let value = {
        user,
        setUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


export default User;