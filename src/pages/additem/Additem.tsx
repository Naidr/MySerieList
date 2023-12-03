import { Link } from "react-router-dom";
import FooterFinal from "../../components/footerFinal/FooterFinal";
import Header from "../../components/header/Header";
import image from "../../assets/Vector.svg"
import { Button, Input, Space, Radio } from 'antd';
import "./Additem.css";

function Additem() {

  const { TextArea } = Input;

  return (
    <>
      <Header />
      <div className="container-add">
        <Space className="form1" direction="vertical">
          <img className="imageIcon" src={image} alt="Image Icon" />
          <Radio.Group>
            <Radio.Button value="series">Series</Radio.Button>
            <Radio.Button value="movies">Movies</Radio.Button>
          </Radio.Group>
          <Input placeholder="Name" />
          <TextArea rows={4} placeholder="Synopsys" />
          <Space className="form2" direction="horizontal">
            <Link to="/mylist">
              <Button className="cancel-button" >
                Cancel
              </Button>
            </Link>
            <Link to="/mylist">
              <Button className="submit-button" >
                Submit
              </Button>
            </Link>
          </Space>
        </Space>
      </div>
      <FooterFinal />
    </>
  );
}

export default Additem;