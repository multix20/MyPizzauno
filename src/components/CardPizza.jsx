import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price.toLocaleString()} <br />
          Ingredientes: {ingredients.join(', ')}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
        <Button variant="secondary" className="ml-2">Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
