import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export function formatDate(date: string): string {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY年MM月DD日");
}
