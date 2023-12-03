import "./Watching.css"
import Play from "../../assets/Play.svg"

function Watching() {
    return (
        <button type="button" className="watching">
            <img className="playIcon" src={Play} alt="playIcon" />
            <label className="start" >
                Start watching
            </label>
        </button>
    );
}

export default Watching;