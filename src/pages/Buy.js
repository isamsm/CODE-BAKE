import { useEffect, useState } from 'react'

import '../styles/Buy.css'

import { Form, FormGroup, Label, Input, Row, Col, Card } from 'reactstrap'
import Select from 'react-select'
import Swal from 'sweetalert2'

import Header from '../components/Header'

const cake_size_options = [
    { value: 'pequeno', label: 'Pequeno'},
    { value: 'medio', label: 'Médio'},
    { value: 'grande', label: 'Grande'}
]

const cake_dough_options = [
    { value: 'massa_branca', label: 'Branca'},
    { value: 'massa_chocolate', label: 'De Chocolate'}
]

const cake_filling_options = [
    { value: 'ninho_morango', label: 'Ninho com morango'},
    { value: 'doce_abacaxi', label: 'Doce de leite com abacaxi'},
    { value: 'doce_morango', label: 'Doce de leite com morango'},
    { value: 'prestigio', label: 'Prestigio'},
    { value: 'brigadeiro', label: 'Brigadeiro com Morango'}
]

const Buy = () => {
    const [price, setPrice] = useState()
    const [cakeSize, setCakeSize] = useState()
    const [cakeDough, setCakeDough] = useState()
    const [cakeFilling, setCakeFilling] = useState()
    const [cakeDate, setCakeDate] = useState('')

    useEffect(() => {
        cakeSize?.value === 'grande' ? setPrice(120) 
        : cakeSize?.value === 'medio' ? setPrice(80) 
        : cakeSize?.value === 'pequeno' ? setPrice(50) 
        : setPrice(0)
    }, [cakeSize])

    const handleOrder = () => {
        if (cakeSize && cakeFilling && cakeDough && cakeDate !== '') {
            const orderObj = {
                id: Date.now(),
                size: cakeSize?.label,
                dough: cakeDough?.label,
                filling: cakeFilling?.label,
                date: cakeDate,
                price: price,
            }

            const existingOrders = JSON.parse(localStorage.getItem('orders')) || []
            existingOrders.push(orderObj)
            localStorage.setItem('orders', JSON.stringify(existingOrders))
            
            Swal.fire({
                confirmButtonColor: '#BE5A72',
                title: 'Oba!',
                text: 'Pedido adicionado ao carrinho com sucesso!'
            })

        } else {
            Swal.fire({
                confirmButtonColor: '#BE5A72',
                icon: 'error',
                title: 'Opa!',
                text: 'Todos os campos devem ser preenchidos!'
            })
        }
    }

    return (
        <>
            <Header />

            <section className='container-buy container-fluid'>
                <div className='main-buy'>
                    <h2 className='title-buy'> Faça sua encomenda </h2>
                    <div className='form-buy'>
                        <Row>
                            <Col>
                                <Card className='form-card'>
                                    <Form>
                                        <FormGroup>
                                            <Label for="cake-size">
                                                Tamanho
                                            </Label>
                                            <Select
                                                id="cake-size"
                                                name="cake-size"
                                                placeholder="Tamanho do bolo"
                                                options={cake_size_options}
                                                onChange={(...cake_size_options) => setCakeSize(...cake_size_options)}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cake-dough">
                                                Tipo de massa
                                            </Label>
                                            <Select
                                                id="cake-dough"
                                                name="cake-dough"
                                                placeholder="Tipo de massa"
                                                options={cake_dough_options}
                                                onChange={(...cake_dough_options) => setCakeDough(...cake_dough_options)}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                        <Label for="cake-filling">
                                                Recheio
                                            </Label>
                                            <Select
                                                id="cake-filling"
                                                name="cake-filling"
                                                placeholder="Recheio"
                                                options={cake_filling_options}
                                                onChange={(...cake_filling_options) => setCakeFilling(...cake_filling_options)}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cake-date">
                                                Data de entrega
                                            </Label>
                                            <Input
                                                id="cake-date"
                                                name="cake-date"
                                                placeholder="Data de entrega"
                                                value={cakeDate}
                                                type='date'
                                                onChange={(e) => setCakeDate(e.target.value)}
                                            />
                                        </FormGroup>
                                        <p> Total: R${price},00 </p>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className='div-buy-btn'>
                        <button className='buy-btn' onClick={handleOrder}>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Buy;