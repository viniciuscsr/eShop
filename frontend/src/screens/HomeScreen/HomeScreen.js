import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Meta from '../../components/Meta';
import { listProducts } from '../../actions/productActions';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import './HomeScreen.css';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <Container className='wide-container'>
          <ImageSlider slides={SliderData} />
        </Container>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <Container>
        <h1>Categories</h1>
        <Row className='m-4 category-row'>
          <CategoryButton
            category='Headphones'
            slug='headphones'
            imageSrc='/images/icons/headphones.png'
          />
          <CategoryButton
            category='Earbuds'
            slug='earbuds'
            imageSrc='/images/icons/earbuds.png'
          />
          <CategoryButton
            category='Pro Headphones'
            slug='professional-headphones'
            imageSrc='/images/icons/ProHeadphones.png'
          />
          <CategoryButton
            category='Earphones'
            slug='earphones'
            imageSrc='/images/icons/earphones.png'
          />
        </Row>
        <h1>Lastest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
