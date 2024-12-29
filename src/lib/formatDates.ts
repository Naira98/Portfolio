import { differenceInMonths } from "date-fns";
function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
  }).format(date);
}

export function formatDateRange(start: Date, end: Date | null) {
  const startDate = formatDate(start);
  const endDate = end ? formatDate(end) : "Present";
  let months = differenceInMonths(end || Date.now(), start);
  let range: string;

  if (months >= 12) {
    const years = Math.floor(months / 12);
    months = months % 12;
    range = months ? `${years}y${months}m` : `${years}y`;
  } else {
    range = `${months}m`;
  }

  return { startDate, endDate, range };
}
