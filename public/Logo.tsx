import Link from "next/link";

export default function Logo() {
  return (
    <span className="block">
      <Link
        className="text-snicker-blue font-barrio  rounded-md font-bold text-2xl"
        href="/"
      >
        Mealplanner
      </Link>
    </span>
  );
}
