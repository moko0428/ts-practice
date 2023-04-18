type Person = {
  name: string;
  age?: number;
};
//&는 Intersection으로서 두개 이상의 타입들을 합쳐준다.
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
};
const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];
