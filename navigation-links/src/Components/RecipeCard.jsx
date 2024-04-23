import { useState } from "react";
 import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from '../assets/cake.jpg';
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function RecipeCard() {
  const recipesArray = [
    {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
    {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
    {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
    {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
    {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
        {
      name: "Sandwich with Boiled Egg",
      time: "20 minutes",
    },
   
  ];

  const [recipes] = useState(recipesArray); // Setting default value

  return (
    <>
      <main className="container-full no-padding mt-4">
        <InputGroup className="my-5">
          <Form.Control
            placeholder="Search recipe"
            aria-label="Recipient's username with two button addons"
          />
          <Button variant="outline-secondary">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Button>
        </InputGroup>

        <Row xs={1} md={2} xl={3} className="g-4">
          {recipes.map((recipe, index) => (
            <Col key={index}>
              <div className="brand">
                <Card className="d-flex justify-content-end flex-row p-0 ">
                  <button class="z-3  position-absolute  mt-2 rounded-4   border-none mr-1">
                    <i class="fa-regular fa-bookmark"></i>
                  </button>

                  <Card.Body className="p-0">
                    <img src={logo} className="img-fluid object-fit-cover " />

                    <div className="p-2">
                      <div className="justify-content-start align-items-start">
                        <Badge bg="primary">{recipe.time}</Badge>

                        <Card.Title
                          bg="primary"
                          className="justify-content-start align-items-start mt-4 "
                        >
                          {recipe.name}
                        </Card.Title>
                      </div>

                      <Card.Text>
                        <div className="d-flex">
                          <h6> Ester Howard</h6>
                        </div>
                      </Card.Text>
                    </div>
                    <div className="d-flex gap-3 m-2">
                      <button className="rounded-4">
                        <i class="fa-regular fa-thumbs-up"></i>
                      </button>
                      <button className="rounded-4">
                        <i class="fa-regular fa-comment"></i>
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
}

export default RecipeCard;
