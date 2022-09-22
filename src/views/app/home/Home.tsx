import { Button } from "antd";
import { useSelector } from "react-redux";
import http from "services/axios";
import { authSelect } from "store/slices/auth/auth.slice";

const Home = () => {
  const userData = useSelector(authSelect);
  const calldata = async () => {
    try {
      let username: string = "";
      let password: string = "";
      let body = { email: username, password: password };
      let res = await http.post("login",body);
      console.log(res);
      
    } catch (error) {
      console.error(error);
      
    }
  };
  return (
    <>
      <p>home</p>
      <span>{userData.username}</span>
      {/* <Button onClick={() => calldata()}>login</Button> */}
    </>
  );
};

export default Home;
