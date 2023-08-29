import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "../CSS/card.css";

const Card = ({ src, text }) => {
  return (
    <div className="card-self">
      <MDBCard>
        <MDBCardImage
          className="card-image"
          src={src}
          alt="..."
          position="top"
        />
        <MDBCardBody classname="card-body">
          <MDBCardText>{text}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Card;
