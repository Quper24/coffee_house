import React from 'react';
import {Container} from 'reactstrap';
import './yourPleasure.css'
import Header from '../header';
import OurGoods from '../ourGoods';
import Footer from '../footer';


const YourPleasure = () => {
    return (
        <>
            <div className="pleasure">
                <Header />
                    <Container>
                        <h1 className="title-big">For your pleasure</h1>
                    </Container>
            </div>
            <OurGoods />
                <Footer />
            
        </>
    )
}

export default YourPleasure;