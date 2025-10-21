import MenuItem from "./MenuItem";
import type { MenuItemType } from "./data";
import styles from "./styles.module.css";

type MenuListProps = {
  menu: MenuItemType[];
  indent: number;
};

const MenuList = ({ menu, indent }: MenuListProps) => {
  return (
    <ul className={styles.list} style={{ marginLeft: `${indent}rem` }}>
      {menu &&
        menu.length &&
        menu.map((item) => (
          <MenuItem key={item.label} item={item} level={indent} />
        ))}
    </ul>
  );
};

export default MenuList;
