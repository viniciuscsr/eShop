import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to eShop',
  description: 'We sell the best eletronics for the best price',
  keywords: 'eletronics, smartphones, headphones, laptops',
};

export default Meta;
