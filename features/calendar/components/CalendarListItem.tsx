import MealCard from "@/features/meals/components/MealCard";
import { Meal } from "@/features/meals/meal.type";
import { getDayNames, getMonthNames } from "@/lib/utility/helpers";
import Link from "next/link";

type CalendarListItemProps = {
  date: string;
  meals: Meal[];
  todayRef: Ref<HTMLLIElement | undefined>;
};

export default function CalendarListItem({
  date,
  meals,
  todayRef,
}: CalendarListItemProps) {
  const today = new Date();
  const todayString = today.toLocaleDateString("sv-SE");
  const d = new Date(date);
  const dateString = d.toLocaleDateString("sv-SE");
  const day = getDayNames(d.getDay());
  const month = getMonthNames(d.getMonth());
  let ref = null;
  let todayStyles = "border border-zinc-800/20";

  if (todayString === dateString) {
    ref = todayRef;
    todayStyles = "border border-transparent bg-snicker-blue/60 text-white";
  }

  return (
    <li ref={ref}>
      <Link
        href={`/calendar/${dateString}`}
        className="border-b first:border-t p-2 border-zinc-700/20 w-full grid grid-cols-[60px_1fr] gap-4"
      >
        <div
          className={`w-16 h-16 flex flex-col align-center justify-center text-center rounded-xs ${todayStyles}`}
        >
          <span className="font-bold">{day.abbreviation}</span>
          <span className="font-semibold text-sm">
            {d.getDate()} {month.abbreviation}
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {meals.map(meal => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </Link>
    </li>
  );
}
