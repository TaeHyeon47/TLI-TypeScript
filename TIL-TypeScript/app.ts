// // TypeScript doesn't support any type of property because we don't tell it anything about the object.
// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// person.role.push('admin'); //? 튜플에서 push가 가능 (예외 기억)
// person.role[1] = 10;
// person.role = [0, 'ggg', 'aaa'];
console.log(person.role);

let favoriteActivities: string[];
// let favoriteActivities: any[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // ERROR
}
