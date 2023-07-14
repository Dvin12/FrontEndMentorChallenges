import { useState } from "react";

export default function AgeForm({ setDay, setMonth, setYear }) {
  const [inputDay, setInputDay] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [dayRequired, setDayRequired] = useState(false);
  const [monthRequired, setMonthRequired] = useState(false);
  const [yearRequired, setYearRequired] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setDayRequired(!inputDay);
    setMonthRequired(!inputMonth);
    setYearRequired(!inputYear);

    if (inputDay && inputMonth && inputYear) {
      setDay(inputDay);
      setMonth(inputMonth);
      setYear(inputYear);

      setInputDay("");
      setInputMonth("");
      setInputYear("");
    }
  }

  function handleDayChange(e) {
    setInputDay(Number(e.target.value));
    setDayRequired(false);
  }

  function handleMonthchange(e) {
    setInputMonth(Number(e.target.value));
    setMonthRequired(false);
  }

  function handleYearChange(e) {
    setInputYear(Number(e.target.value));
    setYearRequired(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="day">
        <label className={dayRequired && "error"}>DAY</label>
        <input
          className={dayRequired && "error"}
          type="number"
          min="1"
          max={inputMonth === 4 ? "28" : "31"}
          placeholder="DD"
          value={inputDay}
          onChange={handleDayChange}
        />

        {inputDay > 31 && <p className="error">Must be a valid day</p>}
        {dayRequired && <p className="error">This field is required</p>}
      </div>

      <div className="month">
        <label className={monthRequired && "error"}>Month</label>
        <input
          className={monthRequired && "error"}
          type="number"
          min="1"
          max="12"
          value={inputMonth}
          placeholder="MM"
          onChange={handleMonthchange}
        />

        {inputMonth > 12 && <p className="error">Must be a valid month</p>}

        {monthRequired && <p className="error">This field is required</p>}
      </div>

      <div className="year">
        <label className={yearRequired && "error"}>YEAR</label>
        <input
          className={yearRequired && "error"}
          type="number"
          min="1900"
          max="2023"
          value={inputYear}
          placeholder="YYYY"
          onChange={handleYearChange}
        />
        {inputYear > 2023 && <p className="error">Must be set in the past</p>}

        {yearRequired && <p className="error">This field is required</p>}
      </div>

      <div className="button-container">
        <div className="line"></div>
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth={2}>
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
}
