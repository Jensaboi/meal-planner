"use client";
import { useEffect, useRef, useState } from "react";
import CalendarList from "./CalendarList";
import CalendarNav from "./CalendarNav";
import { getMonthNames } from "@/lib/utility/helpers";
import { Meal } from "../../meals/meal.type";

export default function Calendar({ data }) {
  const today = new Date();
  const [meals, setMeals] = useState<Meal[]>(data);
  const [month, setMonth] = useState<number>(today.getMonth());
  const currentMonth = getMonthNames(month);
  const lastDateOfMonth = new Date(today.getFullYear(), month + 1, 0);
  const lastDayOfMonth = lastDateOfMonth.getDate();
  const todayRef = useRef(null);

  const dates = new Array(lastDayOfMonth).fill(null).map((_, i) => {
    const date = new Date(today.getFullYear(), month, i + 1).toLocaleDateString(
      "sv-SE",
    );

    const mealOnDate = meals.filter((meal: Meal) => meal.date === date);

    return {
      date,
      meals: mealOnDate,
    };
  });

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
      <CalendarNav
        setMonth={setMonth}
        scrollToToday={scrollToToday}
        today={today}
        currentMonth={currentMonth}
      />

      <CalendarList dates={dates} todayRef={todayRef} />
    </section>
  );
}
