import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import styles from "./styles.module.css";
import type { UserInfo, UserMinimal } from "./types";

const SearchAutocomplete = () => {
  const [query, setQuery] = useState<string>("");
  const [foundNames, setFoundNames] = useState<UserMinimal[]>([]);
  const { data, loading, error } = useFetch<UserInfo>(
    "https://dummyjson.com/users"
  );
  const usersMinimal: UserMinimal[] = data
    ? data.users.map((user) => ({ id: user.id, firstName: user.firstName }))
    : [];
  const debouncedQuery = useDebounce<string>(query);

  useEffect(() => {
    if (!debouncedQuery) {
      setFoundNames([]);
      return;
    }

    setFoundNames(
      usersMinimal.filter((user) =>
        user.firstName.toLowerCase().startsWith(debouncedQuery.toLowerCase())
      )
    );
  }, [debouncedQuery, usersMinimal]);

  return (
    <div className={styles["search-container"]}>
      <h1>Debounced Autocomplete</h1>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        name="search"
        type="search"
        placeholder="Search Users..."
        aria-label="Search Users"
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : data && foundNames.length ? (
        <ul className={styles["results-list"]}>
          {foundNames.map((name) => (
            <li key={name.id}>{name.firstName}</li>
          ))}
        </ul>
      ) : (
        debouncedQuery && <p>No results...</p>
      )}
    </div>
  );
};

export default SearchAutocomplete;
