export default function About() {
  const name = "Bruno";
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          left: "50%",
          align: "center",
          backgroundColor: "#303030",
          color: "#fff",
        }}
      >
        <h2>Inline Styling</h2>
        <p>This text is aligned center by adding inline css</p>
      </div>{" "}
    </>
  );
}
