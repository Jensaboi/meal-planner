import CalendarListItem from "./CalendarListItem";
import { Date } from "../calendar.type";

type CalendarListProps = {
  dates: Date[];
  todayRef: Ref<HTMLLIElement | undefined>;
};

export default function CalendarList({ dates, todayRef }: CalendarListProps) {
  return (
    <ul>
      {dates.map(date => (
        <CalendarListItem
          todayRef={todayRef}
          date={date.date}
          key={date.date}
          meals={date.meals}
        />
      ))}
    </ul>
  );
}
