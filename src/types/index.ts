export type CommonContentsProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type ResponseProps<T> = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: T[];
};
