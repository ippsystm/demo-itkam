import React from "react";
import { Row } from "antd";
import "./style.css";

const LocalLoading = (props) => {
  return (
    // <div className="local-loader">
    <Row className="row-loader" justify="center" align="middle">
      <div className="local-loading"></div>
      <h4>{props.text}</h4>
    </Row>
    // </div>
  );
};

export default LocalLoading;
