import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useState } from "react";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const recruitRequestList = [
  {
    name: "Submit",
    color: "#F13A51",
    value: 75,
  },
  {
    name: "Pending",
    color: "rgba(241, 58, 81, 0.12)",
    value: 100,
  },
];
const monthOptions = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function () {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            return context.parsed + "/" + "100";
          },
        },
      },
    },
    cutout: "78%",
  };
  const data = {
    labels: recruitRequestList.map((item) => item.name),
    datasets: [
      {
        data: recruitRequestList.map((item) => item.value),
        backgroundColor: recruitRequestList.map((item) => item.color),
        // borderColor: recruitRequestList.map((item) => item.color),
        // borderWidth: 1,
        borderJoinStyle: "round",
        borderRadius: 50,
      },
    ],
  };
  return (
    <div className="container__dashboard__sidebar">
      <div className="container__dashboard__sidebar__month">
        <select
          id="selectMonth"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {monthOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="container__dashboard__sidebar__balance">
        <div className="container__dashboard__sidebar__balance__title">
          Balance
        </div>
        <div className="container__dashboard__sidebar__balance__heading">
          133,40,000
        </div>
        <div className="container__dashboard__sidebar__balance__graph">
          <div
            className="doughnut__wrapper"
            style={{
              width: "100%",
              maxWidth: "180px",
            }}
          >
            {<div className="doughnut__wrapper__legend">75%</div>}
            <Doughnut
              className="doughnut__wrapper__chart"
              options={options}
              data={data}
              backgroundColor="black"
            />
          </div>
        </div>
        <div className="container__dashboard__sidebar__balance__subheading">
          Fee Submitted
        </div>
      </div>
      <div className="container__dashboard__sidebar__balance__pending">
        <div className="container__dashboard__sidebar__balance__pending__entry">
          <div className="container__dashboard__sidebar__balance__pending__entry__graph">
            <div
              className="doughnut__wrapper"
              style={{
                width: "100%",
                maxWidth: "70px",
              }}
            >
              <Doughnut
                className="doughnut__wrapper__chart"
                options={options}
                data={data}
                backgroundColor="black"
              />
            </div>
          </div>
          <div className="container__dashboard__sidebar__balance__pending__entry__content">
            <div className="container__dashboard__sidebar__balance__pending__entry__content__heading">
              Total Expenses Pending
            </div>
            <div className="container__dashboard__sidebar__balance__pending__entry__content__amount">
              98,000
            </div>
          </div>
        </div>
        <div className="container__dashboard__sidebar__balance__pending__entry">
          <div className="container__dashboard__sidebar__balance__pending__entry__graph">
            <div
              className="doughnut__wrapper"
              style={{
                width: "100%",
                maxWidth: "70px",
              }}
            >
              <Doughnut
                className="doughnut__wrapper__chart"
                options={options}
                data={data}
                backgroundColor="black"
              />
            </div>
          </div>
          <div className="container__dashboard__sidebar__balance__pending__entry__content">
            <div className="container__dashboard__sidebar__balance__pending__entry__content__heading">
              Total Expenses Pending
            </div>
            <div className="container__dashboard__sidebar__balance__pending__entry__content__amount">
              98,000
            </div>
          </div>
        </div>
      </div>
      <div className="container__dashboard__sidebar__notification">
        <div className="container__dashboard__sidebar__notification__header">
          <div className="container__dashboard__sidebar__notification__header__icon">
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.038 19.7919C7.3643 19.7919 4.69056 19.7954 2.01331 19.7919C1.1489 19.7919 0.627445 19.225 0.721936 18.4096C0.760432 18.0596 0.98791 17.8216 1.20139 17.5731C1.54086 17.1777 1.92582 16.8277 2.23379 16.4042C3.03872 15.3019 3.33619 14.0315 3.48667 12.7051C3.63716 11.3822 3.53217 10.0419 3.71415 8.72248C3.94863 7.02164 4.44558 5.41529 5.65647 4.12042C6.3249 3.40298 7.12983 2.90603 8.07474 2.65756C8.4072 2.57007 8.57169 2.42308 8.59619 2.04161C8.64168 1.24369 9.29612 0.652242 10.052 0.659241C10.822 0.662741 11.4729 1.28568 11.5009 2.09411C11.5114 2.40908 11.6409 2.54907 11.9209 2.62606C13.9892 3.19651 15.1721 4.64537 15.8755 6.58419C16.3654 7.93856 16.4739 9.34192 16.5054 10.7593C16.5334 12.0927 16.5964 13.4155 17.0024 14.7034C17.2649 15.5363 17.6848 16.2748 18.2763 16.9152C18.5317 17.1917 18.7837 17.4681 19.0357 17.7446C19.4032 18.1436 19.4732 18.6125 19.2667 19.092C19.0532 19.5854 18.6262 19.7919 18.0943 19.7919C15.4135 19.7919 12.7258 19.7919 10.038 19.7919Z"
                fill="#F13A51"
              />
              <path
                d="M10.0512 20.8337C10.8841 20.8337 11.7205 20.8372 12.5534 20.8302C12.7774 20.8302 12.9104 20.9001 12.8824 21.1416C12.7704 22.2125 12.4344 23.1784 11.388 23.6684C10.2891 24.1793 9.19024 24.1268 8.21034 23.3639C7.5069 22.8145 7.26543 22.0165 7.19543 21.1556C7.17444 20.8896 7.31442 20.8267 7.5454 20.8302C8.38182 20.8372 9.21474 20.8337 10.0512 20.8337Z"
                fill="#F13A51"
              />
            </svg>
          </div>
          <div className="container__dashboard__sidebar__notification__header__heading">
            Notifications
          </div>
        </div>
        <div className="container__dashboard__sidebar__notification__content"></div>
      </div>
    </div>
  );
}
