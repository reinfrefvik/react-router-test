import React from 'react';
import { useCookies } from 'react-cookie';

const Logout = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const onClickAction = () => {
        if(!!cookies.token) {
            removeCookie('token');
        }

    }
    return (
        <div>
            <button onClick={onClickAction}>Logout</button>
        </div>
    )
};

export {Logout};