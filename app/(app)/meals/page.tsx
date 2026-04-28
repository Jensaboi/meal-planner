import MealScheduleList from "@/features/meals/MealScheduleList";

export default function Meals() {
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
  );

  const meals = [
    {
      date: today.toLocaleDateString("sv-SE"),
      mealType: "dinner",
      recipeName: "Pizza vesuvio",
      recipeId: 1,
    },
    {
      date: today.toLocaleDateString("sv-SE"),
      mealType: "lunch",
      recipeName: "Pasta alfredo",
      recipeId: 2,
    },
    {
      date: tomorrow.toLocaleDateString("sv-SE"),
      mealType: "dinner",
      recipeName: "Hamburger",
      recipeId: 3,
    },
  ];

  return <MealScheduleList meals={meals} />;
}
