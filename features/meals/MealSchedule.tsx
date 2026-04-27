"use client";

import { getMonthNames, getDayNames } from "@/lib/utility/helpers";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function MealSchedule({ meals }) {
  const today = new Date();
  const [plannedMeals, setPlannedMeals] = useState(meals);
  const [month, setMonth] = useState<number>(today.getMonth());
  const currentMonth = getMonthNames(month);
  const lastDateOfMonth = new Date(today.getFullYear(), month + 1, 0);
  const lastDayOfMonth = lastDateOfMonth.getDate();

  const dates = new Array(lastDayOfMonth).fill(null).map((_, i) => {
    const date = new Date(today.getFullYear(), month, i + 1).toLocaleDateString(
      "sv-SE",
    );

    const meal = plannedMeals.find(meal => meal.date === date);

    if (meal) return meal;

    return {
      date,
    };
  });

  return (
    <section>
      <div>
        <h1 className="text-2xl mb-6">Schedule</h1>

        <div className="flex justify-between">
          <button
            onClick={() => setMonth(today.getMonth())}
            className="text-lg font-medium"
          >
            Today
          </button>

          <div className="flex align-center justify-center gap-4">
            <button onClick={() => setMonth(prev => prev - 1)}>
              <ChevronLeft />
            </button>
            <span className="text-lg font-medium">{currentMonth.name}</span>
            <button onClick={() => setMonth(prev => prev + 1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-2 p-2">
        {dates.map(day => {
          const date = new Date(day.date);
          const { abbreviation, name } = getDayNames(date.getDay());

          return (
            <li className="w-full flex" key={day.date}>
              <div className="flex flex-col justify-center align-center w-14">
                <span>{abbreviation}</span>
                <span className="w-fit">{date.getDate()}</span>
              </div>
              <div className="p-5 flex-1 rounded-sm border w-full">
                {day.date}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
