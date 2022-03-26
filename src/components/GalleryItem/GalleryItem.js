import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './GalleryItem.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

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
        <Typography className='fs-5 m-0' gutterBottom variant="h5" component="div">
          #{product.code}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}