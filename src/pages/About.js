import { useContext } from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";
import UserContext from "../utils/UserContext";


const About = () => {
  const {loggedInuser} = useContext(UserContext);
  return (
    <div>
      {loggedInuser}
      <User name={"Abhilasha(function)"} location={"Bihar"} />
      <UserClass name={"Abhilasha (class based)"} location={"Bihar"} />
      
    </div>
  );
};

export default About;
