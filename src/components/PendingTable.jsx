import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { ListContext } from "../contexts/ListContext";

export const PendingTable = ({ tableTitle, colSpanMsg, isCompleted }) => {
  const { list, setList } = useContext(ListContext);

  // From the task list, we need to change only the status of the task (true to false and vice versa)
  const changeStatus = (e, index) => {
    const toggleStatus = list.map((task, ind) => {
      if (ind === index)
        task = { ...task, status: e.target.value === "true" ? true : false };
      return task;
    });
    setList(toggleStatus);
  };

  return (
    <Table striped bordered hover>
      <caption className="captionTitle">{tableTitle}</caption>
      <thead>
        <tr className="text-center bg-secondary text-light align-middle">
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Toggle Status</th>
        </tr>
      </thead>
      <tbody>
        {list.length !== 0 &&
        list.every((ele) => ele.status === isCompleted) ? (
          <tr className="text-uppercase fs-4">
            <td colSpan="5" className="text-center">
              {colSpanMsg}
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
  );
};
