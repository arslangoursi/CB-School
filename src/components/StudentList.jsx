import { StudentsLists } from "../constants/StudentsLists";
import SingleElement from "../components/SingleElement";

export default function StudentList() {
  return (
    <div className="submit__fee__container__table__list">
      {StudentsLists.map((list, index) => (
        <div key={index} className="submit__fee__container__table__list__list">
          <SingleElement text={list.familyId} />
          <SingleElement text={list.name} />
          <SingleElement text={list.student} />
          <SingleElement text={list.fee} />
          <div className="submit__fee__container__table__list__entry">
            <img src={list.images} />
          </div>
          <SingleElement text={list.submited} />
        </div>
      ))}
    </div>
  );
}
