import "./registro.css";

export default function Registry() {
  const name = localStorage.getItem("name");
  const cpf = localStorage.getItem("CPF");
  const numToken = localStorage.getItem("numToken");
  const total = localStorage.getItem("total");
  const listagem = JSON.parse(localStorage.getItem("network"));

  if (!cpf || !name) {
    return null;
  }

  return (
    <div className="registro">
      <h1>dados da {name}</h1>
      <div className="datas-token-user">
        <div className="row">
          <h2 className="info">
            Total:
            <br /> {total} Tokens
          </h2>
          <h2 className="info">
            {name} recebeu:<br></br>
            {numToken} Tokens
          </h2>
        </div>
        <h2 className="percentual">
          {(parseInt(numToken) / parseInt(total)) * 100}%
        </h2>
      </div>

      <h2 className="title-registry">Redes do {name}:</h2>

      <div className="box-2">
        {listagem.map((perfil) => (
          <div className="row-user">
            <h5>{perfil.name}</h5>
            <h5>{perfil.token} tokens</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
