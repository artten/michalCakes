
import { Button,Card,ButtonGroup } from 'react-bootstrap';
import React, { useState } from "react";


const CakePic = ({pic}) => {

    return (
      <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic}/>
      </Card>
    )
   }

export default CakePic