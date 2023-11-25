import React, {useContext} from 'react';
import { AuthContext } from './contexts/authContexts.tsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/loginPage.tsx';
import { About } from './pages/about.tsx';
import { HomePage } from './pages/home.tsx';

const Routers = () => {
    const {isAuthenticated, isLoading} = useContext(AuthContext);

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
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes> 
    )
}

export default Routers;