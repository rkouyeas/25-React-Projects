import { useState, useContext } from "react";
import MenuList from "./MenuList";
import type { MenuItemType } from "./data";
import { PageContext } from ".";

type MenuItemProps = {
  item: MenuItemType;
  level: number;
};

const MenuItem = ({ item, level }: MenuItemProps) => {
  const [selectChildren, setSelectChildren] = useState<boolean>(false);
  const { setPage } = useContext(PageContext);

  const toggleChildren = (): void => {
    setSelectChildren((prevSelectChildren) => !prevSelectChildren);
  };

  return (
    <>
      <li>
        <button onClick={() => setPage(item.label)}>{item.label}</button>
        {item.children && item.children.length && (
          <button onClick={toggleChildren}>{selectChildren ? "-" : "+"}</button>
        )}
      </li>
      {item.children && item.children.length && selectChildren && (
        <MenuList menu={item.children} indent={level + 1} />
      )}
    </>
  );
};

export default MenuItem;
