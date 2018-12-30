import React from "react";
import FontAwesome from "react-fontawesome";
import { Content } from "./component";

const Segment = ({icon, name, component}) => {
  return (
    <div className='mt-3'>
      <Content className="container content-container">
        <p>
          <FontAwesome name={icon} /> {name}
        </p>
      </Content>
      <hr />
      {component}
    </div>
  );
};

export default Segment;
