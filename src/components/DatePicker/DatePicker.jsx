import "./DatePicker.css";

function DatePicker({ label, icon }) {
  return (
    <div className="datepicker">
      <div className="datepicker__hero">
        <img src={icon} alt={label} />
        <p className="datepicker__label">{label}</p>
      </div>

      <div className="datepicker__selections">
        <div className="datepicker__locations">
          <p>Locations</p>
          <select
            id="locations"
            name="locations"
            className="datepicker__select"
          >
            <option value="" selected disabled>
              Select your city
            </option>
          </select>
        </div>

        <div className="datepicker__vr" />

        <div className="datepicker__date">
          <p>Date</p>

          <select name="date" id="date" className="datepicker__select">
            <option value="" selected disabled>
              Select your date
            </option>
          </select>
        </div>

        <div className="datepicker__vr" />

        <div className="datepicker__time">
          <p>Time</p>

          <select name="time" id="time" className="datepicker__select">
            <option value="" selected disabled>
              Select your time
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
