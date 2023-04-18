interface Person {
  name: string;
  age?: number; //?의 의미는 설정을 해도 되고 안해도 되는 값으로 선택 옵션.
}
interface Developer extends Person {
  //interface를 extends해서 상속받기
  skills: string[];
}

const person: Person = {
  name: "이준영",
  age: 25,
};

const expert: Developer = {
  name: "이개발",
  skills: ["javascript", "react"],
};
const people: Person[] = [person, expert];
