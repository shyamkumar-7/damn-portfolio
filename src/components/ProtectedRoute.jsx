import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();

    const localItem = localStorage.getItem("adminAuthenticated");

    if (!localItem) {
        return (
            <Navigate to="/admin/login" replace state={{ from: location }} />
        );
    }

    try {
        const auth = JSON.parse(localItem);

        const isAuthenticated = auth.authenticated === true;
        const isNotExpired = Date.now() < auth.expiresAt;

        if (!isAuthenticated || !isNotExpired) {
            localStorage.removeItem("adminAuthenticated");

            return (
                <Navigate to="/admin/login" replace state={{ from: location }} />
            );
        }

        return <Outlet />;
    } catch (error) {
        // Invalid JSON in localStorage
        localStorage.removeItem("adminAuthenticated");

        return (
            <Navigate to="/admin/login" replace state={{ from: location }} />
        );
    }
};

export default ProtectedRoute;