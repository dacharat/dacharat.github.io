import React from "react";
import Segment from "../segment";
import Data from "./data";
import { FaAddressCard } from "react-icons/fa";

const myAge = () => {
  const myBirthday = new Date(1998, 2, 28);
  const diff_ms = Date.now() - myBirthday.getTime();
  return Math.abs(new Date(diff_ms).getUTCFullYear() - 1970);
};

const Body = () => {
  return (
    <div className="row">
      <div className="col-md">
        <Data left="Firstname" right="Dacharat" />
        <Data left="Lastname" right="Pankong" />
        <Data left="Nickname" right="Jack" />
      </div>
      <div className="col-md">
        <Data left="Birthday" right="28 Feb 1998" />
        <Data left="Age" right={myAge().toString()} />
        <Data left="Nationality" right="Thailand" />
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <Segment
      icon={FaAddressCard}
      name="Personal Information"
      component={<Body />}
    />
  );
};

export default Information;
