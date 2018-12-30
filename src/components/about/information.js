import React from "react";
import Segment from "../segment";
import Data from './data'

const myAge = () => {
  let myBirthday = new Date(1998, 2, 28)
  let diff_ms = Date.now() - myBirthday.getTime();
  return Math.abs(new Date(diff_ms).getUTCFullYear() - 1970);
}

const Body = (
  <div className="row">
    <div className="col-md">
      <Data left="Firstname" right="Dacharat" />
      <Data left="Lastname" right="Pankong" />
      <Data left="Nickname" right="Jack" />
    </div>
    <div className="col-md">
      <Data left="Birthday" right="28 Feb 1998" />
      <Data left="Age" right={myAge()} />
      <Data left="Nationality" right="Thailand" />
    </div>
  </div>
);

const Information = () => {
  return (
    <Segment icon="user-circle" name="Personal Information" component={Body} />
  );
};

export default Information;
