import React, {useContext} from 'react';
import { AuthContext } from './contexts/authContexts.tsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import {LoginPage} from './pages/loginPage.js';
import { Logout } from './pages/logout';
import { About } from './pages/about.tsx';

const Routers = () => {
    const {isAuthenticated, isLoading} = useContext(AuthContext);
    console.log(isAuthenticated);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!isAuthenticated) {
        return (
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Logout />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes> 
    )
}

export default Routers;