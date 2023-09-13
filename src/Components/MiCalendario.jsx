import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./MiCalendario.css";

function MiCalendario(props) {
  let actualYear = props.actualYear;

  const [myYear, setYear] = useState(actualYear);

  console.log(myYear);

  const lastYear = (e, myYear) => {
    myYear = myYear - 1;
    setYear(myYear);
  };

  const nextYear = (e, myYear) => {
    myYear = myYear + 1;
    setYear(myYear);
  };

  const changeYear = (e, newYear) => {
    newYear = Number(newYear);
    setYear(newYear);
  };

  return (
    <div className="mi-calendario">
      <div className="arrows-year">
        <button onClick={(e) => lastYear(e, myYear)}>⬅</button>
        <p>{myYear}</p>
        <button onClick={(e) => nextYear(e, myYear)}>➡</button>
      </div>
      <div className="input-year">
        <input type="number" onChange={(e) => changeYear(e, e.target.value)} />
      </div>
    </div>
  );
}

MiCalendario.propTypes = {
    actualYear : PropTypes.number.isRequired,
}

export default MiCalendario;
