import styles from "./styles.module.css";
import { useRef, type RefObject } from "react";
import useFetch from "../../hooks/useFetch";
import type { UserInfo } from "./types";

const ScrollTopBottom = () => {
  const topRef = useRef<HTMLParagraphElement>(null);
  const bottomRef = useRef<HTMLParagraphElement>(null);

  const { data, loading, error } = useFetch<UserInfo>(
    "https://dummyjson.com/users"
  );

  const handleScroll = (scrollRef: RefObject<HTMLElement | null>) => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles["scroll-container"]}>
      <h1>Scroll To Top and Bottom Feature</h1>
      <p ref={topRef}>This is the top of the section!</p>
      <button onClick={() => handleScroll(bottomRef)}>Scroll to Bottom</button>
      <div className={styles.content}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error.message}</p>
        ) : data ? (
          data.users.map((user) => <p key={user.id}>{user.firstName}</p>)
        ) : (
          <p>Users not found!</p>
        )}
      </div>
      <p ref={bottomRef}>This is the bottom of the section!</p>
      <button onClick={() => handleScroll(topRef)}>Scroll to Top</button>
    </div>
  );
};

export default ScrollTopBottom;
