import "./FooterFinal.css"
import Home from "../../assets/home.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/person-circle.svg"
import { Link } from "react-router-dom";

function FooterFinal() {

  const handleNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/mylist">
            <img className="homeIcon" src={Home} onClick={handleNavigation} />
          </Link>
        </li>
        <li>
          <Link to="/inicial">
            <img className="searchIcon" src={Search} onClick={handleNavigation} />
          </Link>
        </li>
        <li>
          <Link to="/settinguser">
            <img className="userIcon" src={User} onClick={handleNavigation} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterFinal;