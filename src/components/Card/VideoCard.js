import React from 'react';
import { Card } from 'react-bootstrap';

const VideoCard = (props) => {
  const video = props.video
  
  return (
    <Card >
      {/* <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Card.Text>
          Some description about the video.
        </Card.Text>
      </Card.Body> */}
      <Card.Body>
        <div >
          <iframe
            className="embed-responsive-item"
            src={video}
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
