import './styles/Prices.css'    

import { Card, CardBody, CardText, Row, Col } from 'reactstrap'

import Header from './components/Header'
import Footer from './components/Footer'

const Prices = () => {
    return (
        <>
            <Header />

            <section className='container-prices container-fluid'>
                <div className='main-prices'>
                    <h1 className='title-prices'> Tabela de Preços </h1>
                </div>
                <div className='card-prices'>
                    <Row>
                        <Col>
                            <Card className='card-sizes'>
                                <CardBody>
                                    <CardText className='card-text'>
                                        <h2 className='card-titles'> Tamanhos </h2>
                                        <p> Vale tanto para bolos redondos quanto quadrados. </p>
                                        <Row className='text-options'>
                                            <Col>
                                                <h5> Pequeno: R$50,00 </h5>
                                            </Col>
                                            <Col>
                                                <p> Serve de 10 a 15 pessoas </p>
                                            </Col>
                                        </Row>
                                        <Row className='text-options'>
                                            <Col>
                                                <h5> Médio: R$80,00 </h5>
                                            </Col>
                                            <Col>
                                                <p> Serve de 20 a 30 pessoas </p>
                                            </Col>
                                        </Row>
                                        <Row className='text-options'>
                                            <Col>
                                                <h5> Grande: R$120,00 </h5>
                                            </Col>
                                            <Col>
                                                <p> Serve de 30 a 40 pessoas </p>
                                            </Col>
                                        </Row>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card-fillings'>
                                <CardBody>
                                    <CardText className='card-text'>
                                    <h2 className='card-titles'> Recheios </h2>
                                        <p> Não interfere no preço </p>
                                        <h5 className='text-options'> Ninho com morango </h5>
                                        <h5 className='text-options'> Doce de leite com abacaxi </h5>
                                        <h5 className='text-options'> Doce de leite com morango </h5>
                                        <h5 className='text-options'> Prestigio </h5>
                                        <h5 className='text-options'> Brigadeiro </h5>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card-dough'>
                                <CardBody>
                                    <CardText className='card-text'>
                                        <h2 className='card-titles'> Massas </h2>
                                        <p> Não interfere no preço </p>
                                        <h5 className='text-options'> Massa branca </h5>
                                        <h5 className='text-options'> Massa de chocolate </h5>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='div-prices-btn'>
                    <button className='prices-btn' onClick={() => window.location.href = 'buy'}> Encomendar </button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Prices;