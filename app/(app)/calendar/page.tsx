import Calendar from "@/features/calendar/components/Calendar";
import { Meal } from "@/features/meals/meal.type";

export default function Meals() {
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );

  const meals: Meal[] = [
    {
      id: 1,
      date: today.toLocaleDateString("sv-SE"),
      type: "dinner",
      name: "Pizza vesuvio",
      recipeId: 1,
    },
    {
      id: 2,
      date: today.toLocaleDateString("sv-SE"),
      type: "lunch",
      name: "Pasta alfredo",
      recipeId: 2,
    },
    {
      id: 3,
      date: tomorrow.toLocaleDateString("sv-SE"),
      type: "dinner",
      name: "Hamburger",
      recipeId: 3,
    },
  ];

  return <Calendar data={meals} />;
}
