import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoomAdmins() {
    const currentUser = useSelector((state) => state.user && state.user.user.currentUser);
    return currentUser.user.isAdmin ? <Outlet /> : <Navigate to='/sign-in' />;
}