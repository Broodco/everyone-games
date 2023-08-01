"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Searchbar() {
  const search = useSearchParams();
  const [searchValue, setSearchValue] = useState(search.get("q") ?? "");
  const router = useRouter();
  const onSearch = (e : React.FormEvent) => {
    e.preventDefault();

    const encodedSearchValue: string = encodeURI(searchValue)
    setSearchValue("")
    router.push(`/search?q=${encodedSearchValue}`);
  }

  return (
    <form className="relative flex flex-1" onSubmit={onSearch}>
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <MagnifyingGlassIcon
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
        aria-hidden="true"
      />
      <input
        id="search-field"
        className="block h-full w-full bg-slate-900 border-0 py-0 pl-8 pr-0 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
        placeholder="Search..."
        type="search"
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </form>
  )
}
