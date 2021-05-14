import React from "react";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Recipe = ({ label,type,img, link }) => {
  return (
    <Container>
      <Card style={{ width: "100%" }}>
        <CardBody>
          <img className="recipe__img" src={ img } style={{ width: "100%" }}></img>
          <h2 className="recipe__name">{label}</h2>
          <p>{type}</p>
          <a href={link}><Button className="btn-primary success btn-sm">Read More</Button></a>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Recipe;
