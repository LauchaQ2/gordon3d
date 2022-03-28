import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './GalleryItem.css';
import '../../App.css';

export default function GalleryItem({product,size}) {
  return (
    <Card className={size > 500 ? 'product' : 'product w-150px'} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height={size > 500 ? "200" : "150"}
        image={product.url}
        alt=""
      />
      <CardContent className={size > 500 ? "h-d" : "h-m"}>
        <Typography className='fs-5 gordonfont m-0' gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>
      </CardContent>
    </Card>
  );
}