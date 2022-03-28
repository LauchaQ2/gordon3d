import React from 'react';
import ReactPlayer from 'react-player'
import video1  from '../../videos/produccion3d.mp4';
import video2 from '../../videos/maradona3d.mp4';
import { Divider } from '@mui/material';

export default function VideosContainer(){
    return(
        <div className='mb-2 pb-3'>
                    <h1 id="nosotros" className='text-center text-white gordonfont mb-5 mt-2'>SOBRE NOSOTROS</h1>
                    <h1 className='text-center text-white px-5 fs-5 mb-5 mt-2'>GORDON3d es un emprendimiento dedicado a realizar impresiones 3d, piezas únicas y personalizadas, pensadas para decorar, útiles para el hogar o mismo para el uso cotidiano.</h1>
                    <h1 className='text-center text-white px-5 fs-5 mb-5 mt-2'>Están realizadas con filamento PLA, ácido poliláctico, es un termoplástico fabricado a base de recursos renovables como el almidón de maíz, raíces de tapioca o caña de azúcar. A diferencia de otros materiales de la industria hechos principalmente a base de petróleo, por lo tanto es biodegradable, no contamina, es duradero y resistente.</h1>
                    <h1 className='text-center text-white px-5 fs-5 mb-5 mt-2'>Nuestro emprendimiento también esta apto para hacer producciones grandes para emprendimientos o empresas que quieran plasmar su nombre en algún objeto ya sea para regalar o darle uso propio.</h1>
                    <div className='bg-black container d-flex mt-4 mb-5 justify-content-around'>
                        <ReactPlayer url={video1} muted={true} playing={true} controls={true} loop={true} width="280px"/>
                        <ReactPlayer url={video2} muted={true} playing={true} controls={true} loop={true} width="280px"/>
                    </div>
                    <Divider className='divider'/>
        </div>
    )
}
