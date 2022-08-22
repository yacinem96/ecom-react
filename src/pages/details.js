import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { HomeLayout } from '../components/layouts/home'
import { products } from '../data'

export const DetailsPage = () => {
    const [product,setProduct]=useState({})
    const dispatch=useDispatch();
    const params = useParams();
    const pr = products.filter((item) => {
        return item.id === parseInt(params.id)
    })

    useEffect(() => {
        setProduct(pr[0])
       
    },[pr]);

    return (
        <HomeLayout>
            <Container>
                <h1 className="p-3">Product N° {product.id}</h1>
                <Row>
                    <Col className=" p-5 " md={6}>
                        <img src={product.image} width="360px" alt="img" />
                    </Col>

                    <Col className=" align-item-center p-5 " style={{ backgroundColor: "#46494d17" }} md={6}>
                        <h1>{product.title}</h1>
                        <h5 className="text-muted pb-3 pt-3">Category: <span>{product.category}</span></h5>
                        <p>{product.description}</p>
                        <h3> <span className="text-success pb-3 pt-3 ">{product.price}$</span></h3>
                        <div  className="mt-5 ">
                            <Button className="me-3"  variant="outline-primary"><i class="fa-solid fa-cart-arrow-down"></i> Buy now</Button>
                            <Button variant="warning" onClick={()=>dispatch({type:"ADDCART",payload:{...product,qte:1}})}><i class="fa-solid fa-cart-plus"></i> Add to cart</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </HomeLayout>
    )
}
