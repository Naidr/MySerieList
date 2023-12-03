import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Button, Input, Space } from 'antd';
import "./Singup.css"

function Singup() {
  return (
    <>
      <Header />
      <div className="container-singup">
        <Space className="form" direction="vertical">
          <label className="name" htmlFor="name">Sing Up</label>
          <Input name="name" placeholder="email" allowClear />
          <Input name="name" placeholder="User name" allowClear />
          <Input.Password placeholder="password" />
          <Input.Password placeholder="password" />
          <Link to="/">
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

export default Singup;