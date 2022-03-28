import React from "react";
import './Footer.css';
import logo from '../../logo.png';

export default function Footer(){
    return(
        <div className="container-fluid align-items-center d-flex justify-content-between bg-footer">
            <p className="h-auto d-flex align-items-center gordonfont">
            <img className="logofooter" src={logo} />
                GORDON 3D
            </p>
            <p className="h-auto d-flex align-items-center text-center">© 2022 Powered by Lautaro Quevedo</p>
        </div>
    )
}