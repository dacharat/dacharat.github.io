import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";

const ContactMe = styled.a.attrs({ className: "btn m-2" })`
  text-align: center;
  font-size: 20px !important;
  border-color: black !important;
  border-radius: 30px !important;
`;
const ContactButton = ({ setting }) => {
  return (
    <div className="col-md-3 col-6 text-center">
      <ContactMe {...setting}>
        <FontAwesome name={setting.icon} className="mr-2" />
        {setting.name}
      </ContactMe>
    </div>
  );
};

export default ContactButton;
