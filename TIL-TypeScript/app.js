// // TypeScript doesn't support any type of property because we don't tell it anything about the object.
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin'); //? 튜플에서 push가 가능 (예외 기억)
// person.role[1] = 10;
person.role = [0, 'ggg', 'aaa'];
console.log(person.role);
var favoriteActivities;
// let favoriteActivities: any[];
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()); // ERROR
}
