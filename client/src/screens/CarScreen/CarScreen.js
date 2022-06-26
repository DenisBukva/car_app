import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import Meta from '../../components/Meta/Meta';
import { listCarDetails } from '../../redux/actions/carActions';

const CarScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const carDetails = useSelector((state) => state.carDetails)
    const { loading, error, car} = carDetails

    

    useEffect(() => {
        if(!car._id || car._id !== match.params.id) {
            dispatch(listCarDetails(match.params.id))
        }
    }, [match, dispatch, car._id])

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Back
            </Link>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <>
                        <Meta title={car.markaVozila} />
                        <Row>
                            <Col md={5}>
                                <Image src={car.slikaVozila} alt={car.markaVozila} fluid />
                            </Col>
                            <Col md={3} style={{marginRight:'15px'}}>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h3>{car.markaVozila}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                       
                                            <p>Broj Sasije: <strong>{car.brojSasije}</strong></p>
                                            <p>Broj Motora: <strong>{car.brojMotora}</strong></p>
                                            <p>Vrsta Goriva: <strong>{car.vrstaGoriva}</strong></p>
                                            <p>Ks: <strong>{car.ks}</strong></p>
                                            <p>Kw: <strong>{car.kw}</strong></p>
                                            <p>Godina Proizvodnje: <strong>{car.godinaProizvodnje}</strong></p>
                                        
                                    </ListGroup.Item>
                                    <Button 
                                        className='btn-block'
                                        type='button'>
                                       <Link style={{color: 'white'}} to='/reservation-form'>Book</Link> 
                                    </Button>
                                </ListGroup>
                            </Col>

                        </Row>
                    </>
                )
            }
        </>
    )
}

export default CarScreen;
