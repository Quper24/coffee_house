import React from 'react';
import {Col, Row, Container} from 'reactstrap';


const ItemDetails = () => {
    return (
        <>
            <div className="shop">
                <Container>
                    <Row>
                        <Col className="col-lg-5 offset-1">
                            <img className="shop__girl" src="./img/coffee_item.jpg" alt="coffee_item"/>
                        </Col>
                        <Col className="col-lg-4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src="./img/Beans.png" alt="Beans logo"/>
                            <div className="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">16.99$</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ItemDetails;