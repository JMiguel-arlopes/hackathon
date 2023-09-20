import "./registro.css";

export default function Registry(prop) {
  return (
    <div className="registro">
      <h1>{prop.name}</h1>
      <div className="datas-token-user">
        <div className="row">
          <h2 className="info">
            Total:
            <br /> {prop.total} Tokens
          </h2>
          <h2 className="info">
            {prop.name} recebeu:<br></br>
            {prop.numToken} Tokens
          </h2>
        </div>
        <h2 className="percentual">
          {(parseInt(prop.numToken) / parseInt(prop.total)) * 100}%
        </h2>
      </div>

      <h2 className="title-registry">Redes do {prop.name}:</h2>

      <div className="box-2">
        {prop.perfilList.map((perfil) => (
          <div className="row-user">
            <h5>{perfil.name}</h5>
            <h5>{perfil.token} tokens</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
