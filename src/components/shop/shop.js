import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import './shop.css';

const Shop = () => {
    return (
        <div className="shop">
            <Container>
                <Row>
                    <Col className="col-lg-4 offset-2">
                        <img className="shop__girl" src="./img/coffee_girl.jpg" alt="girl"/>
                    </Col>
                    <Col className="col-lg-4">
                        <div className="title">About our beans</div>
                        <img className="beanslogo" src="./img/Beans.png" alt="Beans logo"/>
                        <div className="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                            so questions. <br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                            is song that held help face.
                        </div>
                    </Col>
                </Row>
                    <div className="line"></div>
                <Row>
                    <Col className="col-lg-4 offset-2">
                        <form action="#" className="shop__search">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                        </form>
                    </Col>
                    <Col className="col-lg-4">
                        <div className="shop__filter">
                            <div className="shop__filter-label">
                                Or filter
                            </div>
                            <div className="shop__filter-group">
                                <button className="shop__filter-btn">Brazil</button>
                                <button className="shop__filter-btn">Kenya</button>
                                <button className="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                    <Col className="col-lg-10 offset-lg-1">
                        <div className="shop__wrapper">
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    Presto Coffee Beans 1kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">15.99$</div>
                            </div>
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    AROMISTICO Coffee 1kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">6.99$</div>
                            </div>
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                            <div className="shop__item">
                                <img src="./img/aromistico.jpg" alt="coffee"/>
                                <div className="shop__item-title">
                                    Solimo Coffee Beans 2kg
                                </div>
                                <div className="shop__item-country">Brazil</div>
                                <div className="shop__item-price">10.73$</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shop;