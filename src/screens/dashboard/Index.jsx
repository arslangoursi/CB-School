import Breadcrumbs from "@components/Breadcrumbs";

export default function Dashboard() {
  return (
    <div className="container__dashboard">
      <div className="container__dashboard__main">
        <Breadcrumbs />
      </div>
      <div className="container__dashboard__sidebar"></div>
    </div>
  );
}
