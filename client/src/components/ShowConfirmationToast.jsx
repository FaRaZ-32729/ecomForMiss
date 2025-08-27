import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import handleLogOut from './LogOut';

const ShowConfirmationToast = (setUser, navigate) => {
    toast(({ closeToast }) => (
        <div>
            <p>Are you sure you want to logout?</p>
            <div className="mt-2 flex gap-2">
                <button
                    onClick={async () => {
                        await handleLogOut();
                        setUser("");
                        toast.success("Logout successful", { autoClose: 1000 });
                        closeToast();
                        setTimeout(() => {
                            navigate("/")
                        }, 500);
                    }}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Yes
                </button>
                <button
                    onClick={closeToast}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                >
                    No
                </button>
            </div>
        </div>
    ), {
        // prevents duplicate toasts
        toastId: "logout-confirm",
    });
}

export default ShowConfirmationToast
