import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Button, Input, Space } from 'antd';
import "./Login.css"

function Login() {
  return (
    <>
      <Header />
      <div className="container-login">
      <Space className="form" direction="vertical">
        <label className="name" htmlFor="name">Log In</label>
        <Input name="name" placeholder="email" allowClear />
        <Input.Password placeholder="password" />
        <Link to="/inicial">
          <Button className="log-in-button">Log In</Button>
        </Link>
        <label className="forgot" htmlFor="name" color="blue">Forgot your password?</label>
        <Link to="/singup">
          <Button className="sing-up-button" >
            Sing Up
          </Button>
        </Link>
      </Space>
      </div>
      <Footer />
    </>
  );
}

export default Login;