import React from "react";
import { Card, Col, Button } from "react-bootstrap";

function truncateDescription(text : string, maxLength : number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}


interface CardProps {
  productName: string;
  description: string;
  planType: string;
  price: number;
  image: string;
}

const CardComponent: React.FC<CardProps> = ({
  productName,
  description,
  planType,
  price,
  image,
}) => {
  return (
    <Col md={4} sm={6} xs={12}>
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={image} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body style={{ height: '100%' }}>
        <Card.Title>{productName}</Card.Title>
        <Card.Text style={{ flex: '1' }}>{truncateDescription(description, 200)}</Card.Text>
        <Card.Text>Plan Type: {planType}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Button className='d-flex justify-content-center mb-3 w-100 text-white' variant="warning">Buy Now</Button>
      </Card.Body>
    </Card>
  </Col>
  
  );
};

export default CardComponent;
