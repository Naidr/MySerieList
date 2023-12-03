import { Link } from "react-router-dom";
import FooterFinal from "../../components/footerFinal/FooterFinal";
import Header from "../../components/header/Header";
import { getSeries } from "../../services/series.service";
import { Button, Input, Space, Radio } from 'antd';
import "./Mylist.css"

function Mylist() {
  const series = getSeries();

  return (
    <>
      <Header />
      <div className="body">
        <label className="name" htmlFor="name">My list</label>
        <Radio.Group>
          <Radio.Button value="series">Series</Radio.Button>
          <Radio.Button value="movies">Movies</Radio.Button>
        </Radio.Group>
        <Link to="/additem">
          <Button className="add" >
            Add movie/serie
          </Button>
        </Link>
        <div className="images">
          {series.map((serie) => (
            <Link to="/viewitem" key={serie.id}>
              <img className="image" src={serie.image} alt={serie.name} />
            </Link>
          ))}
        </div>
      </div>
      <FooterFinal />
    </>
  );
}

export default Mylist;