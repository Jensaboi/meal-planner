import { getDayNames, getMonthNames } from "@/lib/utility/helpers";
import Link from "next/link";

export default function MealListItem({ date, todayRef }) {
  const today = new Date();
  const d = new Date(date);
  const day = getDayNames(d.getDay());
  const month = getMonthNames(d.getMonth());
  let ref = null;
  let todayStyles = "";

  if (today.toLocaleDateString("sv-SE") === d.toLocaleDateString("sv-SE")) {
    ref = todayRef;
    todayStyles = "bg-snicker-blue/30";
  }
  return (
    <li ref={ref} className="border-b first:border-t">
      <Link className="block p-2 flex" href={`/meals/`}>
        <div
          className={`w-16 flex flex-col align-center justify-center rounded-sm ${todayStyles}`}
        >
          <span className="font-semibold">{day.abbreviation}</span>
          <span className="font-medium">
            {d.getDate()} {month.abbreviation}
          </span>
        </div>

        <div className="flex-1"></div>
      </Link>
    </li>
  );
}
