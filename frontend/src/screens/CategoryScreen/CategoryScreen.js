import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import Meta from '../../components/Meta';
import useRequest from '../../hooks/useRequest';
import './CategoryScreen.css';

const HomeScreen = ({ match }) => {
  // const keyword = match.params.keyword;
  const category = match.params.category;

  // const pageNumber = match.params.pageNumber || 1;

  const { data, loading, error } = useRequest(
    `/api/products/category/${category}`
  );

  return (
    <>
      <Meta />
      <Container>
        <h1>{category}</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row>
              {data.products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            {/* <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            /> */}
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
