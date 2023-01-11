import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdOutlineAddIcCall } from "react-icons/md";

function CardFunctionalBootstrap(props) {
  const { cardHeader, cardTitle, cardText } = props;
  return (
    <div className="col-sm-3 ">
      <Card style={{ width: "18rem" }}>
        <Card.Header>{cardHeader}</Card.Header>
        <Card.Img variant="top" src="images/images.svg" />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
          <Button variant="primary">
            <MdOutlineAddIcCall /> Make Call
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardFunctionalBootstrap;
