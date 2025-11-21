import { useState, type FormEvent } from "react";
import type { GitHubAccountInfo } from "./types";
import useFetch from "../../hooks/useFetch";
import Profile from "./Profile";
import styles from "./styles.module.css";

const GitHubProfileFinder = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("rkouyeas");
  const {
    data: profileData,
    loading,
    error,
  } = useFetch<GitHubAccountInfo>(`https://api.github.com/users/${userName}`);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setUserName(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles["profile-search-container"]}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub Username..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Search GitHub UserName"
          autoComplete="off"
        />
        <button>Search</button>
      </form>
      <div className={styles["profile-details"]}>
        {error ? (
          <p>Unable to find user</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          profileData && <Profile profileData={profileData} />
        )}
      </div>
    </div>
  );
};

export default GitHubProfileFinder;
