import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function List(props) {
    console.log('PROPS', props)
  return(
    <div className="container">
        {props.movies.map(movie => {
            return   <Card>

                    <CardBody>
                      <CardTitle>{movie.title}</CardTitle>
                      <CardSubtitle>{movie.category}</CardSubtitle>
                      <CardText>{movie.id}</CardText>
                      <CardText>{movie.likes}</CardText>
                      <CardText>{movie.dislikes}</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
        })}


    </div>
    )
}

export default List;