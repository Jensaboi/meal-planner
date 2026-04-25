import Link from "next/link";

export default function Logo() {
  return (
    <span>
      <Link
        className="text-snicker-blue block py-4 font-barrio  rounded-md font-bold text-2xl"
        href="/"
      >
        Mealplanner
      </Link>
    </span>
  );
}
