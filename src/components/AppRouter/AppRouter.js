import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../../pages/HomePage/HomePage.js';
import GalleryContainer from '../GalleryContainer/GalleryContainer'
import VideosContainer from '../VideosContainer/VideosContainer'

export default function AppRouter(){
    return (
        <BrowserRouter>
                <Routes>
                <Route path="/productos" element={<GalleryContainer/>}/>
                <Route path="/nosotros" element={<VideosContainer/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route index element={<HomePage />}/> 
                </Routes>
      </BrowserRouter>
    )
}