import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryListContainer.css';
import ReactPlayer from 'react-player'
import video1  from '../../videos/produccion3d.mp4';
import video2 from '../../videos/maradona3d.mp4';
import Divider from '@mui/material/Divider';

export default function GalleryListContainer({products,size}){
    return(
        <>
                    <h1 className='gordonfont text-white text-center mb-4 mt-2'>PRODUCTOS</h1>
                    <h1 className='text-center text-white fs-5 mb-5 mt-2'>Éstos son algunos de nuestros productos, no dudes en contactarte con nosotros para ver nuestro catálogo total.</h1>
                        <div className="container-fluid d-flex mt-2 mb-3 flex-wrap justify-content-around">
                                {products.map(product => {
                                                            return (
                                                            <GalleryItem size={size} product={product} />
                                                            )
                                                            }
                                                )
                        }
                        </div>
                    <h1 className='fs-4 text-center mb-4 mt-2'>
                        <a target="_blank" className='no-dec text-white' href="https://www.instagram.com/gordon.3d/">Ir a nuestro catálogo</a>
                    </h1>
                    <Divider className='divider'/>
        </>
    )
}