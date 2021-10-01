import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export const ToDoList = ({ list, setToDoList }) => {
  useEffect(() => {
    console.log(list);
  }, [list]);

  // From the task list, we need to change only the status of the task (true to false and vice versa)
  const changeStatus = (e, index) => {
    const toggleStatus = list.map((task, ind) => {
      if (ind === index)
        task = { ...task, status: e.target.value === "true" ? true : false };
      return task;
    });
    setToDoList(toggleStatus);
  };

  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <Table striped bordered hover>
            <caption className="captionTitle">Pending activities list</caption>
            <thead>
              <tr className="text-center bg-secondary text-light">
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Toggle Status</th>
              </tr>
            </thead>
            <tbody>
              {list.length !== 0 && list.every((ele) => ele.status === true) ? (
                <tr className="text-uppercase fs-4">
                  <td colSpan="5" className="text-center">
                    Well done! 🥳
                  </td>
                </tr>
              ) : null}
              {list.length === 0 ? (
                <tr className="text-uppercase fs-4">
                  <td colSpan="5" className="text-center">
                    Please! Add an activity
                  </td>
                </tr>
              ) : null}
              {list.length > 0 &&
                list.map(
                  (cell, index) =>
                    !cell.status && (
                      <tr key={index}>
                        <td>{cell.title}</td>
                        <td>{cell.description}</td>
                        <td>{cell.priority}</td>
                        <td>{cell.status ? "Completed" : "Pending"}</td>
                        <td>
                          <Form.Select
                            name="status"
                            onChange={(e) => changeStatus(e, index)}
                            value={cell.status}
                          >
                            <option value={false}>Pending</option>
                            <option value={true}>Completed</option>
                          </Form.Select>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table striped bordered hover>
            <caption className="captionTitle">
              Completed activities list
            </caption>
            <thead>
              <tr className="text-center bg-secondary text-light">
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Toggle Status</th>
              </tr>
            </thead>
            <tbody>
              {list.length !== 0 &&
              list.every((ele) => ele.status === false) ? (
                <tr className="text-uppercase fs-4">
                  <td colSpan="5" className="text-center">
                    Nothing completed! 🥺
                  </td>
                </tr>
              ) : null}
              {list.length === 0 ? (
                <tr className="text-uppercase fs-4">
                  <td colSpan="5" className="text-center">
                    Please! Add an activity
                  </td>
                </tr>
              ) : null}
              {list.length > 0 &&
                list.map(
                  (cell, index) =>
                    cell.status && (
                      <tr key={index}>
                        <td>{cell.title}</td>
                        <td>{cell.description}</td>
                        <td>{cell.priority}</td>
                        <td>{cell.status ? "Completed" : "Pending"}</td>
                        <td>
                          <Form.Select
                            name="status"
                            onChange={(e) => changeStatus(e, index)}
                            value={cell.status}
                          >
                            <option value={false}>Pending</option>
                            <option value={true}>Completed</option>
                          </Form.Select>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
