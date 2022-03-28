import React from "react";
import './Footer.css';
import logo from '../../logo.png';

export default function Footer(){
    return(
        <div className="container-fluid align-content-center d-flex p-2 justify-content-between bg-footer">
            <p className="h-auto d-flex align-items-center gordonfont">
            <img className="logofooter" src={logo} />
                GORDON 3D
            </p>
            <p className="h-auto d-flex align-items-center">© 2021 Powered by Lautaro Quevedo</p>
        </div>
    )
}