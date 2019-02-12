import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './ourBest.css';

const Best = () => {
    return (
        <div className="best">
            <Container>
                    <div className="title">Our best</div>
                <Row>
                    <Col lg={{size: 10, offset: 1}}>
                    <div className="best__wrapper">
                            <div className="best__item">
                                <img src="img/solimo.jpg" alt="coffee"/>
                                <div className="best__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="best__item-price">10.73$</div>
                            </div>
                            <div className="best__item">
                                <img src="img/presto.jpg" alt="coffee"/>
                                <div className="best__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div className="best__item-price">15.99$</div>
                            </div>
                            <div className="best__item">
                                <img src="img/aromistico.jpg" alt="coffee"/>
                                <div className="best__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div className="best__item-price">6.99$</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Best;


