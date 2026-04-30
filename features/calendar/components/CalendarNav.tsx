import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarNavProps = {
  setMonth: () => void;
  scrollToToday: () => void;
  currentMonth: { abbreviation: string; name: string };
};

export default function CalendarNav({
  setMonth,
  scrollToToday,
  currentMonth,
}: CalendarNavProps) {
  const today = new Date();

  return (
    <nav className="sticky top-16 bg-white">
      <h1 className="text-2xl mb-6">Meals calendar</h1>

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
    </nav>
  );
}
