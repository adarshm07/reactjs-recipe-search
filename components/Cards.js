import React from "react";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Cards = ({ label,type,img }) => {
  return (
      <Card style={{ width: "22%" }}>
        <CardBody>
          <img src={ img } style={{ width: "100%" }}></img>
          <h1>{label}</h1>
          <p>{type}</p>
          <Button variant="primary">Read More</Button>
        </CardBody>
      </Card>
  );
};

export default Card;
