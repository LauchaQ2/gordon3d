import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";
import VideosContainer from "../../components/VideosContainer/VideosContainer";

export default function HomePage(){
    return(

        <div className="bg-black">
        <NavBar/>
        <GalleryContainer/>
        <VideosContainer/>
        </div>

)
}