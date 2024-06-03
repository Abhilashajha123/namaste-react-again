import User from "../components/User";
import UserClass from "../components/UserClass";

const About = () => {
  return (
    <div>
      <h1>This is About us</h1>
      <User name={"Abhilasha(function)"} location={"Bihar"} />
      <UserClass name={"Abhilasha (class based)"} location={"Bihar"} />
    </div>
  );
};

export default About;
