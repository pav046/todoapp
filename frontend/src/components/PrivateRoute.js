import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from './getCurrentUser'; // Ваш API-запрос

const PrivateRoute = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const loggedUser = await getCurrentUser();
            setUser(loggedUser);
            setLoading(false);
        };
        fetchUser();
    }, []);

    if (loading) return <div>Loading...</div>;

    // Если пользователь есть, отрисовываем вложенные компоненты через <Outlet />
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
