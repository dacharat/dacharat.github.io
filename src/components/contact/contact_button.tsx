import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

const ContactMe = styled.a.attrs({ className: "btn m-2" })`
  text-align: center;
  font-size: 20px !important;
  border-color: black !important;
  border-radius: 30px !important;
`;

interface ContactSetting {
  name: string;
  href: string;
  icon: IconType;
}

interface ContactButtonProps {
  setting: ContactSetting;
}

const ContactButton = ({ setting }: ContactButtonProps) => {
  const Icon = setting.icon;
  return (
    <div className="col-md-3 col-6 text-center">
      <ContactMe href={setting.href}>
        <Icon className="me-2" />
        {setting.name}
      </ContactMe>
    </div>
  );
};

export default ContactButton;
