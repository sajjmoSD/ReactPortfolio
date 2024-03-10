export default function Header({ text }) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        width: "640px",
        padding: "80px",
      }}
    >
      <h1 style={{ color: "white" }}>{text}</h1>
    </div>
  );
}
