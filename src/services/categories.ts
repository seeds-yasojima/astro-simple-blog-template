import type { CommonContentsProps, ResponseProps } from "@/types";
import type { MicroCMSQueries } from "microcms-js-sdk";

import { client } from "@/lib/microcms";

export type Categories = CommonContentsProps & {
  name: string;
};

export type CategoriesResponse = ResponseProps<Categories>;

/**
 * カテゴリー一覧取得
 * @params queries　クエリパラメータ
 */
export const getCategories = async (queries?: MicroCMSQueries) => {
  return await client.get<CategoriesResponse>({
    endpoint: "categories",
    queries,
  });
};

/**
 * カテゴリー詳細取得
 * @param contentId　コンテンツID
 * @param queries　クエリパラメータ
 */
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Categories>({
    endpoint: "categories",
    contentId,
    queries,
  });
};
