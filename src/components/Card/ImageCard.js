import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some description about the video.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* <Card.Img
        max-width="auto"
        height="auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3kyNavHMkogoFeYu1aE0BwMokrus96KdfSZVlVLsVB-QLuBsozeMBkzd2uBVgAeoby8&usqp=CAU">
        </Card.Img> */}

      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
