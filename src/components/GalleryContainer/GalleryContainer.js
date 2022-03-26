import React, {useEffect, useState} from 'react';
import GalleryListContainer from '../GalleryListContainer/GalleryListContainer';
import getProducts from '../../FirebaseRequest/FirebaseRequest';
import './GalleryContainer.css';
export default function GalleryContainer(){
    const [products, setProducts] = useState([])
    const [size, setSize] = useState(window.innerWidth);


    useEffect(() => {
        getProducts
          .then(data =>{
            setProducts(data)
          })
          const handleSize = () =>{
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleSize)
      },[])



    return(
        <div id="productos" className='container-fluid bg-black p-3'>
            <GalleryListContainer size={size} products={products}/>
        </div>
    )
}