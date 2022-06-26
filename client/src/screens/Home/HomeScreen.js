import React, { useEffect } from 'react';
import Meta from '../../components/Meta/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Car from '../../components/Car/Car';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import Paginate from '../../components/Paginate/Paginate';
import { listCars } from '../../redux/actions/carActions';
import { Redirect } from 'react-router-dom';




const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const carList = useSelector((state) => state.carList)
  const { loading, error, cars, page, pages} = carList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listCars(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])
  
  return (
    <>
      <Meta />
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : userInfo ? (
        <>
        <h1>Cars</h1>
          <Row>
            {cars.map((car) => (
              <Col key={car._id} sm={12} md={6} lg={4} xl={3}>
                <Car car={car} />
              </Col>
            ))}
          </Row>
              <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        
        </>
      ) : (
        <>
          <Redirect to='/login' />
          
        
        </>
      )}
    </>
  )
}

export default HomeScreen