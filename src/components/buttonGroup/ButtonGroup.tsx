import "./ButtonGroup.css"

function ButtonGroup() {
  return (
    <div className="buttonGroup">
      <button type="button" className="Series" >
        Series
      </button>
      <button type="button" className="Movies" >
        Movies
      </button>
      <button type="button" className="Top Charts" >
        Top Charts
      </button>
    </div>
  );
}

export default ButtonGroup;