import { formatMoney } from "utils/currency";
import gtr from "assets/gtr.png";
import "./RecentTransaction.css";

function RecentTransaction() {
  return (
    <div className="recentTransaction">
      <div className="recentTransaction__car">
        <img src={gtr} alt="Nissan GT - R" />
      </div>
      <div className="recentTransaction__car-details">
        <p className="recentTransaction__car-name">Nissan GT - R</p>
        <span className="recentTransaction__car-type">Sport Car</span>
      </div>

      <div className="recentTransaction__payment">
        <p className="recentTransaction__date">20th July</p>
        <span className="recentTransaction__price">{formatMoney(8000)}</span>
      </div>
    </div>
  );
}

export default RecentTransaction;
