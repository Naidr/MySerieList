import { Link } from "react-router-dom";
import FooterFinal from "../../components/footerFinal/FooterFinal";
import Header from "../../components/header/Header";
import "./Settinguser.css"
import { Button, Input, Space } from 'antd';
import User from "../../assets/person-circle.svg"

function Settinguser() {
  return (
    <>
      <Header />
      <div className="bodysetting">
        <img className="user" src={User} />
        <Space className="form" direction="vertical">
        <Input name="name" placeholder="Id user:" allowClear />
        <Input name="name" placeholder="New name" allowClear />
        <Input.Password placeholder="New password" />
        <Input.Password placeholder="New password" />

        <Link to="/inicial">
          <Button className="update">
            Update
          </Button>
        </Link>

        <Link to="/">
          <Button className="cancel">
            Disconnect
          </Button>
        </Link>
        </Space>
      </div>
      <FooterFinal />
    </>
  );
}

export default Settinguser;