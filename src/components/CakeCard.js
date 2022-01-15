
import { Button,Card,ButtonGroup } from 'react-bootstrap';
import React, { useState } from "react";


const CakeCard = ({name,price,pic}) => {
  let [item_count, setCount] = useState(0);
  let [spaces, setSpaces] = useState("   ");
  function increase() {
    item_count++;
    setCount(item_count)
  }
  function decrease() {
    if (item_count != 0) {
      item_count--;
      setCount(item_count)
    }
  }
    return (
      <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic}/>
        <Card.Body style={{ backgroundColor:'#BBB' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          {/* <ButtonGroup vertical> */}
            
            <ButtonGroup className="me-3" aria-label="First group">
            <Button variant="primary" onClick={increase} >+</Button>
            <Card.Text style={{ marginLeft: '.7rem', marginRight: '.7rem' }} >{item_count}</Card.Text>
            <Button variant="primary"  onClick={decrease}>-</Button>
            </ButtonGroup>
            <br/>
            <br/>
            <ButtonGroup className="me-3" aria-label="second group">
            <Button variant="primary">Buy</Button>
          </ButtonGroup>

          {/* </ButtonGroup> */}
        </Card.Body>
      </Card>
    )
   }

export default CakeCard