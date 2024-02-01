import React from 'react';
import { Card } from 'react-bootstrap';

const VideoCard = () => {
  return (
    <Card style={{ width: "auto" }}>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some description about the video.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Card.Footer>
    </Card>
  );
};

export default VideoCard;
