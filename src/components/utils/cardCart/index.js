import {Button,Card}  from 'react-bootstrap';
import { useDispatch } from 'react-redux';


export const CardCart = ({item}) => {
  const dispatch=useDispatch();
  return (
    <>
   <Card className="mb-2 text-start shadow" style={{ width: '18rem' }}>
      <Card.Img className="p-3" variant="top" style={{height:"220px"}} src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text >
          <span className="text-success "> {item.price}$</span>
        </Card.Text>
        <Card.Text >Qte:
            <span className="text-secondary "> {item.qte}</span>
        </Card.Text>
        <Button className="float-end" style={{backgroundColor:"rgb(250, 154, 21)"}}><i class="fa-solid fa-cart-arrow-down"></i> buy now</Button>
        <Button variant='danger' onClick={()=>dispatch({type:"DELETECART" , payload:item.id})} ><i class="fa-solid fa-trash-can"></i> Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}

