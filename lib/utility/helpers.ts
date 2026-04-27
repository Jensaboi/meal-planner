export function getMonthNames(monthIndex: number) {
  const months = [
    { abbreviation: "Jan", name: "January" },
    { abbreviation: "Feb", name: "February" },
    { abbreviation: "Mar", name: "March" },
    { abbreviation: "Apr", name: "April" },
    { abbreviation: "May", name: "May" },
    { abbreviation: "Jun", name: "June" },
    { abbreviation: "Jul", name: "July" },
    { abbreviation: "Aug", name: "August" },
    { abbreviation: "Sep", name: "September" },
    { abbreviation: "Oct", name: "October" },
    { abbreviation: "Nov", name: "November" },
    { abbreviation: "Dec", name: "December" },
  ];

  return months[monthIndex];
}

export function getDayNames(dayIndex: number) {
  const days = [
    { abbreviation: "Mon", name: "Monday" },
    { abbreviation: "Tue", name: "Tuesday" },
    { abbreviation: "Wed", name: "Wednesday" },
    { abbreviation: "Thu", name: "Thursday" },
    { abbreviation: "Fri", name: "Friday" },
    { abbreviation: "Sat", name: "Saturday" },
    { abbreviation: "Sun", name: "Sunday" },
  ];

  return days[dayIndex];
}
