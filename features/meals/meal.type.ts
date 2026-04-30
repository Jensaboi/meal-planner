export type Meal = {
  id: number;
  name: string;
  type: "dinner" | "lunch";
  date: string;
  recipeId: number;
};
