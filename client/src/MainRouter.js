import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from './screens/Home/HomeScreen';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CarScreen from './screens/CarScreen/CarScreen';
import ReservationFrom from './screens/ReservationForm/ReservationFrom';


const MainRouter = () => {

 
    return (
        <Router>
            <Header />
            <main className='py-3'>
            <Container>
                <Route path='/login' component={Login} />
                <Route path='/' exact  component={Home} />
                <Route path='/car/:id' component={CarScreen} />
                <Route path='/register' component={Register} />
                <Route path='/reservation-form' component={ReservationFrom} />
            </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default MainRouter