import type { Blog } from "@/services/blogs";

import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

import { formatDate } from "@/lib/utils";

type Props = {
  content: Blog;
};

const ClientBlogArticle: React.FC<Props> = ({ content }) => {
  return (
    <Card className="rounded-sm">
      <article>
        <a
          href={`/blog/${content.id}`}
          className="flex gap-4 p-3 hover:opacity-50 md:p-4"
        >
          <div className="grow">
            <p className="text-sm text-muted-foreground">
              {formatDate(content.publishedAt)}
            </p>
            <h2 className="text-md mt-1 font-semibold md:text-xl">
              {content.title}
            </h2>
            {content.categories.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {content.categories.map((category) => (
                  <Badge variant="secondary" className="font-normal">
                    # {category.name}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <div className="hidden shrink-0 md:block">
            <img
              src={content.eyecatch?.url || "/img/no-image-tmb.png"}
              height={content.eyecatch?.height || "700"}
              width={content.eyecatch?.width || "483"}
              alt={content.title}
              className="aspect-video h-auto w-[100px] rounded-sm object-cover md:w-[160px]"
            />
          </div>
        </a>
      </article>
    </Card>
  );
};

export default ClientBlogArticle;
