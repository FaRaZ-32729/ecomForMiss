import React, { Children, useEffect, useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : "";
    });

    useEffect(() => {
        if (user && user.name) {
            const { name, email } = user;
            localStorage.setItem("user", JSON.stringify({ name, email }));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    console.log("context api user name", user)
    return (

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
