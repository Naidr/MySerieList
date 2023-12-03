import { Link } from "react-router-dom";
import FooterFinal from "../../components/footerFinal/FooterFinal";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import { getSeries } from "../../services/series.service";
import { Button, Input, Space, Radio } from 'antd';
import "./Inicial.css"

function Inicial() {
  const series = getSeries();

  return (
    <>
      <Header />
      <div className="body">
        <Search />
        <Radio.Group>
          <Radio.Button value="series">Series</Radio.Button>
          <Radio.Button value="movies">Movies</Radio.Button>
          <Radio.Button value="top">Top Charts</Radio.Button>
        </Radio.Group>
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

export default Inicial;