import FooterFinal from "../../components/footerFinal/FooterFinal";
import Header from "../../components/header/Header";
import Watching from "../../components/watching/Watching";
import { Rate } from 'antd';
import "./Viewitem.css";

function Viewitem() {

  return (
    <>
      <Header />
      <div className="body-item">
        <img className="imagePrincipal" src="/images/image2.png" alt="onepiece"></img>
        <div className="begin">
          <label className="title">One piece</label>
          <Rate allowHalf defaultValue={2.5} />
        </div>
        <Watching />
        <p>
          The plot of One Piece revolves around Monkey D. Luffy,
          a young man who has the dream of becoming the Pirate King.
          To achieve this, he embarks on a journey with the goal
          of finding the treasure known as 'One Piece,'
          which was left behind by the former Pirate King, Gol D. Roger.
        </p>
      </div>
      <FooterFinal />
    </>
  );
}

export default Viewitem;