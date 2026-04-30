import { Meal } from "../meal.type";

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="p-2 border border-zinc-800/20 rounded-md ">
      <span className="font-medium text-sm text-zinc-900/50 capitalize tracking-tight block">
        {meal.type}
      </span>
      <h3 className="font-semibold">{meal.name}</h3>
    </div>
  );
}
