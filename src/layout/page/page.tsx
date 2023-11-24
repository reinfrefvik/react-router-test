import { Header } from "../header/header.tsx";
import React from 'react';

const Page = ({children}) => {
    return (
        <>
            <Header />
            <div style={{padding: "8px", height: "fill", width: "auto", backgroundColor: "#fdfdfd"}}>
                {children}
            </div>
        </>
    );
}

export { Page };