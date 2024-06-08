import useSWR from "swr";

import { getBlogs } from "@/services/blogs";

import ClientBlogArticle from "./ClientBlogArticle";

type SearchBlogWrapperProps = {
  q: string | null; // 検索クエリ
};

const SearchBlogData: React.FC<SearchBlogWrapperProps> = ({ q }) => {
  /** 全文検索 */
  const { data, error, isLoading } = useSWR(
    q === null ? null : ["/search", q],
    ([, q]) =>
      getBlogs({
        q,
      }),
  );

  if (error) return <div>エラーが発生しました</div>;

  if (isLoading) return <div>読み込み中...</div>;

  return (
    <>
      {data?.contents.length !== 0 ? (
        <div className="space-y-4">
          {data?.contents.map((content) => (
            <ClientBlogArticle content={content} />
          ))}
        </div>
      ) : (
        <div>検索結果はありません。</div>
      )}
    </>
  );
};

const SearchBlog = () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  return (
    <div className="container my-8 w-full max-w-[1000px]">
      <section>
        <h1 className="text-3xl font-bold">『{query}』の検索結果</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {query} に関連する記事を表示しています。
        </p>
        <div className="mt-6">
          <SearchBlogData q={query} />
        </div>
      </section>
    </div>
  );
};

export default SearchBlog;
