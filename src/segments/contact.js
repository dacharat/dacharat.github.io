import React from "react";
import Segment from "../components/segment";
import ContactButton from "../components/contact/contact_button";

const contacts = [
  {
    name: "Github",
    href: "https://github.com/dacharat",
    icon: "github-square"
  },
  {
    name: "Resume",
    href: "https://goo.gl/96buwB",
    icon: "file-pdf-o"
  },
  {
    name: "Email",
    href:
      "mailto:dacharat.p@ku.th?subject=Hi Dacharat, I contacted you from Github",
    icon: "at"
  },
  {
    name: "Facebook",
    href: "https://facebook.com/dacharat.pankong",
    icon: "facebook-square"
  }
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
      <Segment icon="address-book" name="Contact" component={<Body />} />
    </div>
  );
};

export default Contact;
