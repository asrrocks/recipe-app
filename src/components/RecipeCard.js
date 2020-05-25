import React from 'react'
import { Col, Row, Container, Card, Accordion, Button } from 'react-bootstrap'

const RecipeCard = (props) => {
    const { recipes } = props;
    return (
        <Container>
            <div id="recipes" className="RecipeContainer">
                <Row>
                    {
                        recipes.map(recipe => (
                            <Col md={4} sm={6} xs={12}>
                                <div>
                                    <Card className="RecipeCardIndiv">
                                        <Card.Img variant="top" src={recipe.recipe.image} />
                                        <Card.Body>
                                            <Card.Title className="cardTitle">
                                                {recipe.recipe.label}
                                            </Card.Title>

                                            <Card.Text className="cardContent">

                                                <Accordion className="MainContainerDrop">
                                                    <Card style={{ backgroundColor: "#111" }}>
                                                        <div className="readHeader">
                                                            <Accordion.Toggle className="BTNreadHeader" as={Button} eventKey="1">
                                                                Read Recipe
                                                            </Accordion.Toggle>

                                                        </div>

                                                        <Accordion.Collapse eventKey="1">
                                                            <Card.Body className="readBody">
                                                                <p><span style={{ padding: 10 }} className="badge badge-warning">Calories : {parseInt(recipe.recipe.calories)}</span> </p>
                                                                {
                                                                    recipe.recipe.ingredientLines.map(ingredient => <p>{ingredient}</p>)
                                                                }
                                                                <a href={recipe.recipe.url} target="_blank">Know More....</a>

                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Accordion>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        ))
                    }


                </Row>
            </div>

        </Container>
    );
}

export default RecipeCard;