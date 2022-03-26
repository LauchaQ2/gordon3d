import React from "react";
import { useState, useEffect } from 'react';
import logo from '../../logo.png';
import gordon from '../../gordon3d.png'
import './NavBar.css';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar(){

    const [size, setSize] = useState(window.innerWidth);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(()=>{
        const handleSize = () =>{
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleSize)
        },[])

    return(
        <>
            <Offcanvas className={size < 500 ? "w-75" : null} show={show} onHide={handleClose}>
                <Offcanvas.Body className="offcanvasbody">
                    <ul className={size < 500 ? "navbar-nav mb-lg-0 align-items-center" :"navbar-nav mb-1 mb-lg-0"}>
                        <a className="linknav" href="#inicio">
                            <li className={size < 500 ? "nav-link gordonfont mb-3 fs-1" : "nav-link gordonfont"} style={{ color: "#000000" }}>INICIO</li>
                        </a>
                        <a  className="linknav">
                            <li className={size < 500 ? "nav-link gordonfont fs-1" : "nav-link gordonfont"} style={{ color: "#000000" }}>PRODUCTOS</li>
                        </a>
                        <a  className="linknav">
                            <li className={size < 500 ? "nav-link gordonfont mb-3 fs-1" : "nav-link gordonfont"} style={{ color: "#000000" }}>NOSOTROS</li>
                        </a>
                        <a  className="linknav"> 
                            <li className={size < 500 ? "nav-link gordonfont mb-3 fs-1" : "nav-link gordonfont"} style={{ color: "#000000" }}>CONTACTO</li>
                        </a>
                    </ul>
                    <a href="https://www.instagram.com/gordon.3d/" target="_blank">
                    <img className="gordonimg" src={gordon}/>
                    </a>
                </Offcanvas.Body>
            </Offcanvas>
            <div id="inicio" className="container-fluid background-navbar align-items-center d-flex justify-content-around flex-wrap p-2">
                <Button className="menuNav">
                    <MenuIcon className="menuIcon" sx={{ fontSize: 50 }} onClick={handleShow}/>
                </Button>    
                    <img className="logo" src={logo} />
            </div></>
    )
}