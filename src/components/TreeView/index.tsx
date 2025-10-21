import { useState, createContext } from "react";
import { menu } from "./data"; //Typically the data would likely be passed into the component as a prop
import MenuList from "./MenuList";
import styles from "./styles.module.css";

type PageContextType = {
  setPage: (page: string) => void;
};

export const PageContext = createContext<PageContextType>({
  setPage: () => {},
});

const TreeView = () => {
  const [page, setPage] = useState<string>("Home");

  return (
    <PageContext.Provider value={{ setPage }}>
      <div className={styles["treeview-container"]}>
        <div className={styles["sidebar-container"]}>
          <MenuList menu={menu} indent={0} />
        </div>
        <div className={styles.page}>
          <h1>{page}</h1>
        </div>
      </div>
    </PageContext.Provider>
  );
};

export default TreeView;
