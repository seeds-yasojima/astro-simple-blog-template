import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * clsx と tailwind-merge を組み合わせたユーティリティ関数
 * @param inputs - クラス名
 * @returns 結合されたクラス名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 日付をフォーマットする関数
 * @param date - 日付
 * @returns フォーマットされた日付
 */
export function formatDate(date: string): string {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY年MM月DD日");
}
