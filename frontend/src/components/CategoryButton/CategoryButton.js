import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './CategoryButton.css';

const CategoryButton = ({ category, slug, imageSrc }) => {
  return (
    <LinkContainer to={`/category/${slug}`}>
      <button className='category-button btn m-2 p-2'>
        <div className='category-button--img'>
          <img src={imageSrc} className='img-fluid' alt={category} />
        </div>
        <span>{category}</span>
      </button>
    </LinkContainer>
  );
};

export default CategoryButton;
