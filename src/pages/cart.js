import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap'
import { HomeLayout } from '../components/layouts/home'
import { CardCart } from '../components/utils/cardCart'



export const CartPage = () => {
  const cart=useSelector((state)=>state.CartReducer.cart)

  
  return (
    <HomeLayout>
     <Container id='cart' className=''>
        <h1 className="m-5 text-center">Cart Product</h1>
        <Row>
            {cart.length!==0 ? cart.map((item) => {
             
                return (
                    
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}  xxl={3} key={item.id}>
                       <CardCart item={item}/>
                       
                       <p></p>
                    </Col>
                )
            })
            :<h3 className='text-center text-warning'>votre panier est vide</h3>}

            
        </Row>
    </Container>
    </HomeLayout>
  )
}
