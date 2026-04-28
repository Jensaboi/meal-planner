"use client";

import { getMonthNames } from "@/lib/utility/helpers";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MealListItem from "./MealListItem";

export default function MealScheduleList({ meals }) {
  const today = new Date();
  const [plannedMeals, setPlannedMeals] = useState(meals);
  const [month, setMonth] = useState<number>(today.getMonth());
  const currentMonth = getMonthNames(month);
  const lastDateOfMonth = new Date(today.getFullYear(), month + 1, 0);
  const lastDayOfMonth = lastDateOfMonth.getDate();
  const todayRef = useRef(null);

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

  console.log(dates);
  function scrollToToday() {
    if (!todayRef?.current) return;

    todayRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }

  useEffect(() => {
    if (!todayRef?.current) return;

    scrollToToday();
  }, []);

  return (
    <section>
      <div>
        <h1 className="text-2xl mb-6">Schedule</h1>

        <div className="flex justify-between">
          <button
            onClick={() => {
              setMonth(today.getMonth());
              setTimeout(() => {
                scrollToToday();
              }, 200);
            }}
            className="text-lg font-medium"
          >
            Today
          </button>

          <div className="flex align-center justify-center gap-4">
            <button onClick={() => setMonth(prev => prev - 1)}>
              <ChevronLeft />
            </button>
            <span className="text-lg font-medium">{currentMonth?.name}</span>
            <button onClick={() => setMonth(prev => prev + 1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <ul className="flex flex-col">
        {dates.map(item => (
          <MealListItem
            key={item.date}
            date={item.date}
            mealName={item?.mealName}
            mealType={item?.mealType}
            todayRef={todayRef}
          />
        ))}
      </ul>
    </section>
  );
}
