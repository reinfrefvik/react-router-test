import React from 'react';
import { useCookies } from 'react-cookie';
import { BsFillPersonFill } from "react-icons/bs";


const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const onClickAction = () => {
        if(!cookies.token) {
            setCookie('token', 'test1234');
        } else {
            removeCookie('token');
        }

    }
    return (
        <div>
            <span style={{display: "flex", alignItems: "center"}} onClick={onClickAction}><BsFillPersonFill /> {!cookies.token ? 'Login' : 'Logout'}</span>
        </div>
    )
};

export {Login};