import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = () => {
  return (
    <Card style={{ width: "auto", height: "auto"}}>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some description about the video.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Img
          className="img-fluid"
          width="100%"
          height="auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8Kq7XjfrHJGR3uODBgp8OIUJVBzr8KLl6cwctHhtVXKTLgYUp5kS&usqp=CAE&s"
          title="Image"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

        />
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
