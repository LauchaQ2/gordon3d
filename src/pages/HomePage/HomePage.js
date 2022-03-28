import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";
import VideosContainer from "../../components/VideosContainer/VideosContainer";
import Contacto from "../../components/Contacto/Contacto";
import Footer from "../../components/Footer/Footer";


export default function HomePage(){
    return(

        <div className="bg-black">
        <NavBar/>
        <GalleryContainer/>
        <VideosContainer/>
        <Contacto/>
        <Footer/>
        </div>

)
}