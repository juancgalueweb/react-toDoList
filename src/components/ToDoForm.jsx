import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ToDoForm = ({ toDoList, setToDoList }) => {
  const initialState = {
    title: "",
    description: "",
    priority: "",
    status: false,
  };
  const [toDoForm, setToDoForm] = useState(initialState);
  const { title, description, priority } = toDoForm;

  useEffect(() => {
    // console.log(toDoList);
  }, [toDoList]);

  const handleOnChange = (e) => {
    setToDoForm({ ...toDoForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, toDoForm]);
    setToDoForm(initialState); //Reset form input fields
  };
  return (
    <Container className="mb-3">
      <Row>
        <Col className="col-lg-6 m-auto">
          <h1 className="text-danger">Add a new task</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Activity title..."
                name="title"
                value={title}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Activity description"
                name="description"
                value={description}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                className="mb-3"
                name="priority"
                value={priority}
                onChange={handleOnChange}
              >
                <option value="">Please select a priority</option>
                <option value="High">High!!</option>
                <option value="Medium">Medium!</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Form.Group>
            <Button variant="danger" type="submit">
              Add task
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
