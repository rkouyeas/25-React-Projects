import { useState } from "react";
import { data } from "./data";
import styles from "./styles.module.css";

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  enableMulti?: boolean;
  className?: string;
};

const Accordion = ({
  enableMulti = false,
  className,
  ...rest
}: AccordionProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelection = (id: number): void => {
    if (enableMulti) {
      setSelected((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((val) => val !== id)
          : [...prevSelected, id]
      );
    } else
      setSelected((prevSelected) => (prevSelected.includes(id) ? [] : [id]));
  };

  return (
    <div className={`${styles.accordion} ${className ?? ""}`} {...rest}>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className={styles["accordion-item"]}>
            <div className={styles["accordion-title"]}>
              <p>{item.question}</p>
              <button onClick={() => handleSelection(item.id)}>
                {selected.includes(item.id) ? "-" : "+"}
              </button>
            </div>
            {selected.includes(item.id) && (
              <div className={styles["accordion-content"]}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default Accordion;
