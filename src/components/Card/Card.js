import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  console.log(props);
  let id = props.id;
  let pitcure = props.pitcure;
  let name = props.name;
  let description = props.description;
  let tag = props.tags[0];

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>name</Card.Title>
        <Card.Text>description</Card.Text>
        <Button variant="primary">tag</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;