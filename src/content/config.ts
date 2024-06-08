// 1. ユーティリティを`astro:content`からインポート
import { z, defineCollection } from 'astro:content';

// 2. 各コレクションに`type`と`schema`を定義
const aboutCollection = defineCollection({
  type: 'content', // v2.5.0以降
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  about: aboutCollection,
};
