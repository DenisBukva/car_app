import React, { useState } from 'react';
import {Col, Card, Form, ListGroup, Button} from 'react-bootstrap';
import Meta from '../../components/Meta/Meta';

const ReservationFrom = () => {
    const [vrijemeIznajmljivanja, setVrijemeIznajmljivanja] = useState('')
    const [polaznaLokacija, setPolaznaLokacija] = useState('')
    const [dolaznaAdresa, setDolaznaAdresa] = useState('')
    const [name, setName] = useState('')
    const [brojOsoba, setBrojOsoba] = useState(0)
  return (
        <>
            <Meta title='Ping - Reservation' />
            <Col md={5}>
                <Card>
                    <ListGroup variant='flush'>
                         <ListGroup.Item>
                            <Form>
                                <Form.Group>Vrijeme</Form.Group>
                                    <Form.Control
                                         type='vrijeme'
                                        placeholder='Unesi vremenski period iznajmljivanja'
                                        value={vrijemeIznajmljivanja}
                                        onChange={(e) => setVrijemeIznajmljivanja(e.target.value)}>
                                    </Form.Control>
                                <Form.Group>Polazna Adresa</Form.Group>
                                    <Form.Control
                                        type='adresa'
                                        placeholder='Polazna Adresa'
                                        value={polaznaLokacija}
                                        onChange={(e) => setPolaznaLokacija(e.target.value)}>
                                        </Form.Control>
                                <Form.Group>Dolazna Adresa</Form.Group>
                                    <Form.Control
                                        type='adresa'
                                        placeholder='Dolazna Adresa'
                                        value={dolaznaAdresa}
                                        onChange={(e) => setDolaznaAdresa(e.target.value)}>
                                        </Form.Control>

                                <Form.Group>Ime i prezime vozaca</Form.Group>
                                    <Form.Control
                                        type='name'
                                        placeholder='Ime i prezime vozaca'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}>
                                        </Form.Control>
                                <Form.Group>Broj putnika</Form.Group>
                                    <Form.Control
                                        type='number'
                                        placeholder='Broj putnika u vozilu'
                                        value={brojOsoba}
                                        onChange={(e) => setBrojOsoba(e.target.value)}>
                                    </Form.Control>
                            </Form>
                                </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button 
                                            className='btn-block'
                                            type='button'>
                                                Submit
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                                </Card>
                            </Col>
        </>
  )
}

export default ReservationFrom