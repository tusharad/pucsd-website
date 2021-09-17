import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import dept from "../Images/dept.jpg";

export default function Landing(props) {
  console.log(props.data);
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={dept} alt="First slide" />
          <Carousel.Caption>
            <h3>{props.data ? props.data.banner1 : "Loading"}</h3>
            <p>{props.data ? props.data.caption1 : "Loading"}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="s-block w-100" src={dept} alt="Second slide" />
          <Carousel.Caption>
            <h3>{props.data ? props.data.banner2 : "Loading"}</h3>
            <p>{props.data ? props.data.caption2 : "Loading"}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={dept} alt="Third slide" />
          <Carousel.Caption>
            <h3>{props.data ? props.data.banner3 : "Loading"}</h3>
            <p>
            {props.data ? props.data.caption3 : "Loading"}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
