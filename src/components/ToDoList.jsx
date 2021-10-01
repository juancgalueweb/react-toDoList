import React, { useContext, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListContext } from "../contexts/ListContext";
import { PendingTable } from "./PendingTable";
import { CompletedTable } from "./CompletedTable";

export const ToDoList = () => {
  const { list } = useContext(ListContext);
  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <PendingTable
            tableTitle={"Pending activities list"}
            colSpanMsg={"Well done 🥳"}
            isCompleted={true}
          />
        </Col>
        <Col>
          <CompletedTable
            tableTitle={"Completed activities list"}
            colSpanMsg={"Nothing completed 😱"}
            isCompleted={false}
          />
        </Col>
      </Row>
    </Container>
  );
};
