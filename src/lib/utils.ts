import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { format } from "date-fns";
import { ja } from "date-fns/locale";

/**
 * 日付をフォーマットする関数
 * @param date フォーマットしたい日付
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: string): string {
  return format(date, "yyyy年MM月dd日", { locale: ja });
}
