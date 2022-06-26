import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Car = ({ car }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/car/${car._id}`}>
                <Card.Img src={car.slikaVozila} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/car/${car._id}`}>
                    <Card.Title as='div'>
                        <strong>{car.markaVozila}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Car;