import { type ReactNode, useState } from "react";
import styles from "./styles.module.css";

type NonEmptyArray<T> = [T, ...T[]];

//Could pass in props such as color and different tab layout optoins for customizing ui
type TabsProps = {
  tabsContent: NonEmptyArray<{
    id: number;
    title: string;
    content: ReactNode;
  }>;
};

const Tabs = ({ tabsContent }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const handleSelection = (tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className={styles["tabs-navigation-container"]}>
        {tabsContent.map((tab, index) => (
          <button
            key={tab.id}
            className={`${
              currentTabIndex + 1 === tab.id ? styles.selected : ""
            }`}
            onClick={() => handleSelection(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabsContent[currentTabIndex] ? ( //The index should always exisit but just for safety
          tabsContent[currentTabIndex].content
        ) : (
          <p>No content assigned to this tab!</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
