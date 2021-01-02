import React from 'react';
import { Card } from 'react-bootstrap';

const HomeCard = () => {
  return (
    <Card className='bg-dark text-white'>
      <Card.Img
        style={{ height: '30rem' }}
        src='/images/headphones/home-card-Image.jpg'
        alt='Card image'
      />
      <Card.ImgOverlay>
        <h1 className='text-center'>eShop</h1>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HomeCard;
