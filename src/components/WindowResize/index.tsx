import useWindowResize from "../../hooks/useWindowResize";

const WindowResize = () => {
  const { height, width } = useWindowResize();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Window Resize Custom Hook Test</h1>
      <p>Window Height: {height}</p>
      <p>Window Width: {width}</p>
    </div>
  );
};

export default WindowResize;
