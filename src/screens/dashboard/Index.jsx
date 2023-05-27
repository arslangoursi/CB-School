import Breadcrumbs from "@components/Breadcrumbs";
import StatsFees from "@assets/StatsFees.svg";
import StatsStaff from "@assets/StatsStaff.svg";
import StatsStudents from "@assets/StatsStudents.svg";

export default function Dashboard() {
  const stats = [
    {
      name: "Total students",
      value: 2400,
      image: StatsStudents,
    },
    {
      name: "Total staff",
      value: 2400,
      image: StatsStaff,
    },
    {
      name: "Pending Fees",
      value: 2400,
      image: StatsFees,
    },
  ];
  return (
    <div className="container__dashboard">
      <div className="container__dashboard__main">
        <Breadcrumbs />
        <div className="container__dashboard__main__stats">
          {stats.map((stat) => (
            <div
              className="container__dashboard__main__stats__entry"
              style={{
                background: `url(${stat.image})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#5f60ed",
                backgroundPositionX: "calc(100% + 3rem)",
                backgroundPositionY: "5%",
              }}
            >
              <div className="container__dashboard__main__stats__entry__heading">
                {stat.name}
              </div>
              <div className="container__dashboard__main__stats__entry__value">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container__dashboard__sidebar"></div>
    </div>
  );
}
