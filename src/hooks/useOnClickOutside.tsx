import { useEffect, type RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: (e: Event) => void
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      onClickOutside(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, onClickOutside]);
};

export default useOnClickOutside;
