import { ChangeEvent, useState } from "react";
import { Person } from "./types";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

const emptyPerson: Person = {
  name: "",
  age: 0,
  hobby: "",
};

const App = () => {
  const [person, setPerson] = useState<Person>(emptyPerson);
  const [persons, setPersons] = useState<Person[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setPerson({ ...person, name: value });
        break;

      case "age":
        let age: number = parseInt(value);

        isNaN(age) && (age = 0);

        setPerson({ ...person, age });
        break;

      case "hobby":
        setPerson({ ...person, hobby: value });
        break;

      default:
        break;
    }
  };

  const isNotFilled = (newPerson: Person): boolean => {
    return Object.values(newPerson).some((value) => {
      let result: boolean = false;

      if (typeof value === "string") {
        value.trim() === "" && (result = true);
      } else if (typeof value === "number") {
        (value === 0 || isNaN(value)) && (result = true);
      }

      return result;
    });
  };

  const handleAddPerson = (newPerson: Person): void => {
    setError(false);

    if (isNotFilled(newPerson)) {
      setError(true);
    } else {
      setPersons([...persons, newPerson]);
      setPerson(emptyPerson);
    }
  };

  console.log(persons);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Input
            name="name"
            autoFocus
            placeholder="Nome"
            label="Nome:"
            value={person.name}
            onChange={(event) => handleInputChange(event)}
          />

          <Input
            name="age"
            type="number"
            placeholder="Idade"
            label="Idade:"
            value={person.age === 0 ? "" : person.age}
            onChange={(event) => handleInputChange(event)}
          />

          <Input
            name="hobby"
            placeholder="Hobby"
            label="Hobby:"
            value={person.hobby}
            onChange={(event) => handleInputChange(event)}
          />

          <p>{error && "Todos os campos são obrigatórios."}</p>

          <button
            onClick={() => {
              handleAddPerson(person);
            }}
          >
            ENVIAR
          </button>
        </div>

        <div className="cards">
          {persons.map((currentPerson, index) => (
            <Card
              key={index}
              name={currentPerson.name}
              age={currentPerson.age}
              hobby={currentPerson.hobby}
            />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
