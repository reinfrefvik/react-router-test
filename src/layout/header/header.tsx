import { Login } from '../../components/login.tsx';
import './header.css';
import React from 'react';
import { BsFillPuzzleFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className="Header">
            <span style={{display: "flex", alignItems: "center"}}><BsFillPuzzleFill /> LOGO</span>
            <ul className="HeaderList">
                <li>Link1</li>
                <li>Link2</li>
            </ul>
            <Login/>
        </div>
    );
}

export { Header };