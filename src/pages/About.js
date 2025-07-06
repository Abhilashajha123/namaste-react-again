import User from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
  return (
    <div>
      <User name={"Abhilasha(function)"} location={"Bihar"} />
      <UserClass name={"Abhilasha (class based)"} location={"Bihar"} />
    </div>
  );
};

export default About;
