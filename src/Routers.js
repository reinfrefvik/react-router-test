import React, {useContext} from 'react';
import { AuthContext } from './contexts/authContexts';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Login} from './pages/login';
import { Logout } from './pages/logout';

const Home = () => <h1><Logout/></h1>;
const About = () => <h1>About</h1>;

const Routers = () => {
    const {isAuthenticated, isLoading} = useContext(AuthContext);
    console.log(isAuthenticated);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!isAuthenticated) {
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes> 
    )
}

export default Routers;