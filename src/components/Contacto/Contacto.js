import React from "react";
import ig from '../../assets/instagraminv.png'
import fb from '../../assets/facebookinv.png'
import wp from '../../assets/whatsappinv.png'
import './Contacto.css';


export default function Contacto(){
    return(
        <div>
            <h1 id="contacto" className="gordonfont text-white text-center mb-4 mt-2">CONTACTO</h1>
            <h1 className='text-center text-white fs-5 mb-5 mt-2'>¡Contactanos para diseños personalizados!</h1>
            <div className="contredes container-fluid d-flex justify-content-around align-items-center">
            <a target="_blank" className='no-dec2 text-white' href="https://www.instagram.com/gordon.3d/">
                <img className="redes" src={ig}/>
            </a>
            <a target="_blank" className='no-dec2 text-white' href="https://www.facebook.com/gordon.3d/">
                <img className="redes" src={fb}/>
            </a>
            <a target="_blank" className='no-dec2 text-white' href="https://walink.co/1986aa">
                <img className="redes" src={wp}/>
            </a>            </div>
        </div>
    )
}
