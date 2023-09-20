import "./result.css";

export default function Result(props) {
  const { title, result, isUserFound, handleSelectUser, selectedUser } = props;

  return (
    <div className="container">
      <h2 className="title">{title}</h2>

      <div className="box">
        {result.map((person) => (
          <div
            onClick={() =>
              handleSelectUser(
                person.name,
                person.CPF,
                person.numToken,
                person.total,
                person.network
              )
            }
          >
            {selectedUser.CPF === person.CPF ? (
              <img src="assets/checked.png" width={25} height={25} />
            ) : null}

            {/* {selectedUser.name === person.name ?} */}
            <p className="text">{person.name} </p>
            <p className="text">{person.CPF} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
