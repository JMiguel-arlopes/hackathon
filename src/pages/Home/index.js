import { useEffect, useState } from "react";

import Input from "../../components/Input";
import Result from "../../components/Result";
import Button from "../../components/Button";
import "./home.css";
import { json } from "react-router-dom";

export default function Home() {
  const [hasCPF, setHasCPF] = useState(false);
  const [isUserFound, setIsUserFound] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [hasSelectedUser, setHasSelectedUser] = useState(false);

  const persons = [
    {
      name: "Person 1",
      CPF: "CPF: 166.545.876-2",
      numToken: 4,
      total: 100,
      network: [
        { name: "vitor", token: 3 },
        { name: "victor", token: 5 },
        { name: "david", token: 13 },
        { name: "rafael", token: 8 },
      ],
    },
    {
      name: "Person 2",
      CPF: "CPF: 145.523.456-6",
      numToken: 8,
      total: 100,
      network: [
        { name: "A", token: 7 },
        { name: "B", token: 9 },
        { name: "C", token: 12 },
        { name: "D", token: 4 },
      ],
    },
    {
      name: "Person 3",
      CPF: "CPF: 128.535.956-4",
      numToken: 16,
      total: 100,
      network: [
        { name: "E", token: 9 },
        { name: "F", token: 23 },
        { name: "G", token: 14 },
        { name: "H", token: 1 },
      ],
    },
    {
      name: "Person 4",
      CPF: "CPF: 156.545.876-5",
      numToken: 24,
      total: 100,
      network: [
        { name: "I", token: 3 },
        { name: "J", token: 15 },
        { name: "K", token: 2 },
        { name: "L", token: 19 },
      ],
    },
  ];

  const handleSelectUser = (name, CPF, numToken, total, network) => {
    setSelectedUser({
      name,
      CPF,
      numToken,
      total,
      network,
    });
    setHasSelectedUser(true);
    console.log(selectedUser);
  };

  useEffect(() => {
    if (selectedUser.name) {
      localStorage.setItem("CPF", selectedUser.CPF);
      localStorage.setItem("name", selectedUser.name);
      localStorage.setItem("numToken", selectedUser.numToken);
      localStorage.setItem("total", selectedUser.total);
      localStorage.setItem("network", JSON.stringify(selectedUser.network));
    }
  }, [selectedUser]);

  return (
    <section className="container-principal">
      <Input
        placeholder="Contacte seu CPF"
        hasCPF={hasCPF}
        setHasCPF={setHasCPF}
        isUserFound={isUserFound}
        setIsUserFound={setIsUserFound}
        setHasSelectedUser={setHasSelectedUser}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
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

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>

      <Button
        hasSelectedUser={hasSelectedUser}
        text={
          hasSelectedUser
            ? `Desejo saber mais sobre ${selectedUser.name}`
            : "Selecione a Pessoa"
        }
      />
    </section>
  );
}
