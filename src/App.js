import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';



function App() {
  function TypesExample() {
    return (
      <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </>
    );
  }
  
  const form = () =>{
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Form Dropdown with favorite movies</Form.Label>
            <Form.Control as="select">
              <option>Inception</option>
              <option>Forrest Gump</option>
              <option>Shawshank Redemption</option>
              <option>Spiderman: Into the Spiderverse</option>
              <option>Avengers: Endgame</option>
            </Form.Control>
          </Form.Group>


    
        <Button variant="primary" type="submit">
          Submit
        </Button>
     </Form>

    );
  }
  return (
    <div className="App">
      <Nav fill variant="tabs" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>Bootstrap Website</h1>
      {TypesExample()}
      {form()}
    </div>
  );
}

export default App;
