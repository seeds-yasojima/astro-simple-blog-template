import { useState } from "react";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchInputForm = () => {
  const [value, setValue] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("q") ?? ""
      : "",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") return;
    window.location.href = `/search?q=${value}`;
  };

  return (
    <div className="mx-auto w-full max-w-[500px]">
      <form onSubmit={handleSubmit} role="search">
        <div className="flex h-10 items-center gap-2 rounded-full border bg-white px-4 shadow-sm">
          <MagnifyingGlassIcon className="size-4 text-slate-500" />
          <input
            placeholder="キーワードから探す"
            type="search"
            className="h-full w-full outline-none"
            value={value}
            onChange={handleChange}
          />
        </div>

        {/* <div className="flex justify-center">
        <Button type="submit">検索</Button>
      </div> */}
      </form>
    </div>
  );
};

export default SearchInputForm;
