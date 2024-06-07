import { client } from "@/lib/microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { CommonContentsProps, ResponseProps } from "@/types";

export type Blog = CommonContentsProps & {
  title: string;
  content: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  categories: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  }[];
};

export type BlogResponse = ResponseProps<Blog>;

/**
 * ブログ一覧取得
 * @params queries　クエリパラメータ
 */
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "blogs", queries });
};

/**
 * ブログ詳細取得
 * @param contentId　コンテンツID
 * @param queries　クエリパラメータ
 */
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
