import React from "react";
import Container  from "react-bootstrap/Container";
import image from "../Asset/images/mountains-ge1695de53_1280.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const styles = {
  // LandingImageContainer: {
  // width: '200px',
  // height: '250px',
  // },
  LandingImageResize: {
    width: 'auto',
    height: '100%',
   

  }
};

 function LandingPage() {
  return (
    <Container>
    <Row>
      <Col sm={4}>
        <Card>
      <img style={styles.LandingImage}src={image}alt="LandingImage"></img>
      </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default LandingPage
