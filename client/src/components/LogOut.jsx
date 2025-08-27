import axios from "axios";

const URL = import.meta.env.VITE_Node_Api_Url;

export const handleLogOut = async () => {
    try {
        await axios.delete(`${URL}/auth/logout`, {
            withCredentials: true, 
        });
        console.log("Logout successful");
    } catch (error) {
        console.log("Logout failed:", error.message);
    }
};


export default handleLogOut;