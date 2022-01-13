
import { Button,Card } from 'react-bootstrap';

const CakeCard = ({name,price,pic}) => {
    return (
      <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic}/>
        <Card.Body style={{ backgroundColor:'#BBB' }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    )
   }

export default CakeCard