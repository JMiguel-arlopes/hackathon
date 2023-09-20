import { useState } from "react";

import Input from "../../components/Input";
import Result from "../../components/Result";
import Button from "../../components/Button";
import "./home.css";

export default function Home() {
  const [hasCPF, setHasCPF] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [hasSelectedUser, setHasSelectedUser] = useState(false);

  const persons = [
    { name: "Person 1", CPF: "CPF: 166.545.876-2" },
    { name: "Person 2", CPF: "CPF: 145.523.456-6" },
    { name: "Person 3", CPF: "CPF: 128.535.956-4" },
    { name: "Person 4", CPF: "CPF: 156.545.876-5" },
  ];

  const handleSelectUser = (name, CPF) => {
    setSelectedUser({
      name,
      CPF,
    });
    setHasSelectedUser(true);
  };

  return (
    <section className="container-principal">
      <Input
        placeholder="Contacte seu CPF"
        hasCPF={hasCPF}
        setHasCPF={setHasCPF}
        isUserFound={isUserFound}
        setIsUserFound={setIsUserFound}
      />

      {isUserFound ? (
        <Result
          title="resultado:"
          result={persons}
          isUserFound={isUserFound}
          handleSelectUser={handleSelectUser}
          selectedUser={selectedUser}
        />
      ) : null}

      <p className="paragrath">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <Button
        hasSelectedUser={hasSelectedUser}
        text="Deseja saber mais sobre XXXXX"
      />
    </section>
  );
}
