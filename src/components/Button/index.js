import "./button.css";

export default function Button(props) {
  const { text, hasSelectedUser } = props;
  return (
    <>
      <button className="btn" disabled={!hasSelectedUser}>
        {text}
      </button>
    </>
  );
}
