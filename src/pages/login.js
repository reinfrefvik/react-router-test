import React from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const onClickAction = () => {
        if(!cookies.token) {
            setCookie('token', 'test1234');
        }

    }
    return (
        <div>
            <button onClick={onClickAction}>Login</button>
        </div>
    )
};

export {Login};