import type { ReactNode, CSSProperties } from "react";
import Tabs from "./index";

type NonEmptyArray<T> = [T, ...T[]];

//Example to demonstrate that Tabs component can take in any valid JSX and render it
const RandomContent = () => (
  <div style={{ textAlign: "center" }}>
    <h1>This is a random component!</h1>
    <p>
      The tabs component can take in any React element and display it
      accurately!
    </p>
  </div>
);

const TabsTest = () => {
  const testStyle: CSSProperties = {
    padding: "1rem",
    textAlign: "center",
    fontSize: "2rem",
  };

  const tabs: NonEmptyArray<{ id: number; title: string; content: ReactNode }> =
    [
      {
        id: 1,
        title: "Tab 1",
        content: <div style={testStyle}>This is content for tab 1</div>,
      },
      {
        id: 2,
        title: "Tab 2",
        content: <div style={testStyle}>This is content for tab 2</div>,
      },
      {
        id: 3,
        title: "Tab 3",
        content: <RandomContent />,
      },
    ];

  return <Tabs tabsContent={tabs} />;
};

export default TabsTest;
