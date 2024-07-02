var students = [
  {
    ID: 999,
    name: "abou gabal",
    age: "24",
    address: {
      state: "mansoura",
      country: "egypt",
    },
    skills: ["bodybuilding", "basketball", "coding"],
    isLeader: true,
  },
  {
    ID: 99392,
    name: "ahmed fathy",
    age: "23",
    address: {
      state: "belbis",
      country: "ksa",
    },
    skills: ["joking", "football", "faceSlam"],
    isLeader: true,
  },
  {
    ID: 94399,
    name: "mahmoud",
    age: "24",
    address: null,
    skills: ["running", "cleaning dishes", "walking"],
    isLeader: false,
  },
];

for (var i = 0; i < students.length; i++) {
  console.log(students[i].name);
  console.log(students[i].skills);
}
// * output
// abou gabal
// app1.js:36 (3) ['bodybuilding', 'basketball', 'coding']
// app1.js:35 ahmed fathy
// app1.js:36 (3) ['joking', 'football', 'faceSlam']
// app1.js:35 mahmoud
// app1.js:36 (3) ['running', 'cleaning dishes', 'walking']
//! Can JSON hold null and Boolean values?
//* yes it can hold a null and boolean values
//! What are the differences between XML and JSON?
//* json has smaller data size and high data transmission
//* XML is complex and less flexible
//*SON supports numbers, objects, strings, and Boolean arrays.