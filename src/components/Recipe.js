import React from "react";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Recipe = ({ label,type,img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardBody>
        <img src={ img }></img>
        <h1>{label}</h1>
        <p>{type}</p>
        <Button variant="primary">Read More</Button>
      </CardBody>
    </Card>
  );
};

export default Recipe;
