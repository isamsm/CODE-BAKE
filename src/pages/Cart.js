import '../styles/Cart.css'
import { Card, CardBody, CardText, Row, Col } from 'reactstrap'
import Swal from 'sweetalert2'

import Header from '../components/Header'
import { useEffect, useState } from 'react'

const Cart = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        let storedItems = JSON.parse(localStorage.getItem('orders'))
        storedItems ? setItems(storedItems) : setItems([])
    }, [])

    const removeItem = (item) => {
        const updatedItems = items.filter(i => i !== item);
        setItems(updatedItems);
        localStorage.setItem('orders', JSON.stringify(updatedItems));
    }

    return (
        <>
            <Header />

            <section className='container-cart container-fluid'> 
                <div className='main-cart'>
                    <h2 className='cart-title'> Carrinho </h2>
                </div>
                {items.length !== 0 ? 
                <>
                    <div className='card-cart'>
                        {items.map((item) => (
                            <div key={item.id}>
                                <Row>
                                    <Col className='remove-cart'>
                                        <button className='remove-cart-btn' onClick={() => removeItem(item)}> ⎯ </button>
                                    </Col>
                                    <Col>
                                        <Card className='full-card-cart'>
                                            <CardBody>
                                                <CardText className='cart-card-text'>
                                                    <p> Bolo de tamanho {item.size.toLowerCase()}, com recheio de {item.filling.toLowerCase()} e massa {item.dough.toLowerCase()}. </p>
                                                    <p> Para: {item.date.split('-').reverse().join('/')} </p>
                                                    <p> <strong> R${item.price},00 </strong> </p>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                    <div className='cart-total'>
                        <p> Total: R${items.reduce((soma, item) => item.price + soma, 0)},00 </p>
                    </div>
                    <div className='div-cart-btn'>
                        <button className='cart-btn' onClick={() => {
                            localStorage.setItem('orders', JSON.stringify([]))
                            setItems([]);
                            Swal.fire({
                                confirmButtonColor: '#BE5A72', 
                                title: 'Oba!', 
                                text:'Sua encomenda foi realizada com sucesso!'}) 
                            }}> 
                            Finalizar compra 
                        </button>
                    </div>
                </>
                : 
                <div className='empty-cart'>
                    <p> Seu carrinho está vazio.  </p>
                    <a className='empty-cart-btn' href='/buy'> Fazer Encomenda </a>
                </div>
                }
            </section>
        </>
    )
}

export default Cart;