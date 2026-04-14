import React from "react";
import Segment from "../components/segment";
import ContactButton from "../components/contact/contact_button";
import {
  FaAddressBook,
  FaGithubSquare,
  FaFilePdf,
  FaAt,
  FaFacebookSquare,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface ContactItem {
  name: string;
  href: string;
  icon: IconType;
}

const contacts: ContactItem[] = [
  {
    name: "Github",
    href: "https://github.com/dacharat",
    icon: FaGithubSquare,
  },
  {
    name: "Resume",
    href: "https://goo.gl/96buwB",
    icon: FaFilePdf,
  },
  {
    name: "Email",
    href: "mailto:dacharat.p@ku.th?subject=Hi Dacharat, I contacted you from Github",
    icon: FaAt,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/dacharat.pankong",
    icon: FaFacebookSquare,
  },
];

const Body = () => {
  return (
    <div className="row">
      {contacts.map((contact, i) => (
        <ContactButton key={i} setting={contact} />
      ))}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="mt-3 mb-3">
      <Segment icon={FaAddressBook} name="Contact" component={<Body />} />
    </div>
  );
};

export default Contact;
