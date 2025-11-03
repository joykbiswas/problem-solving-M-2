
const obj = {};
obj.nextLevel = { courseId: "level2" };
obj["true"] = "This is a true string key";

// console.log(obj);

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };

// const courses = [
//   [course1, "Level1"],
//   [course2, "Level2"],
// ];

const courses = [
    ["Programming Hero", "Level1"], ["Next Level", "Level2"]
]

const map = new Map(courses);
// map.set(course1, {courseId: "level1"});
// map.set(course2, {courseId: "level2"});

// map.forEach((value, key) => key.name = "Shoz Shorol Simple " +key.name)

// for (let key of map.keys()) {
//     key.name = "Shohoz Shorol Advanced " + key.name;
// }


// console.log(courses);
console.log(map);
// console.log(map.entries());
// console.log([...map.values()]);