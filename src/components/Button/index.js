import "./button.css";

export default function Button(props) {
  const { text, hasSelectedUser } = props;
  return (
    <>
      <button className="btn" disabled={!hasSelectedUser}>
        <a href={hasSelectedUser ? "/registry" : "#"} alt="registry">
          {text}
        </a>
      </button>
    </>
  );
}
