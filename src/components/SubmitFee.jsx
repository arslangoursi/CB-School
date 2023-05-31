import StudentList from "./StudentList";
const headings = [
  "Family ID",
  "Family Name",
  "Students",
  "Pending Fee",
  "Images",
  "Last Fee Submitted",
];

export default function SubmitFee() {
  return (
    <div className="submit__fee__container">
      <div className="submit__fee__container__header">
        <div className="submit__fee__container__header__heading">
          Submit Fee
        </div>
        <div className="submit__fee__container__header__search">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.49956"
              cy="9.77269"
              r="6.04545"
              stroke="#ED5F5F"
              strokeWidth="2.07273"
            />
            <path
              d="M9.50009 7.18182C9.15985 7.18182 8.82293 7.24884 8.50859 7.37904C8.19425 7.50925 7.90863 7.7001 7.66804 7.94068C7.42745 8.18127 7.23661 8.46689 7.1064 8.78124C6.9762 9.09558 6.90918 9.43249 6.90918 9.77273"
              stroke="#ED5F5F"
              strokeWidth="2.07273"
              strokeLinecap="round"
            />
            <path
              d="M17.2735 17.5454L14.6826 14.9545"
              stroke="#ED5F5F"
              strokeWidth="2.07273"
              strokeLinecap="round"
            />
          </svg>

          <input placeholder="Enter Family Name or Family ID Here"></input>
        </div>
      </div>
      <div className="submit__fee__container__table">
        <div className="submit__fee__container__table__header">
          {headings.map((heading, index) => (
            <div
              className="submit__fee__container__table__header__entry"
              key={index}
            >
              {heading}
            </div>
          ))}
        </div>

        <StudentList />
      </div>
    </div>
  );
}
