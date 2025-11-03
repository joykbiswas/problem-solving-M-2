//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//ToDo initiate  empty object
//TODO check if the response already exist or not
//TODO If it exists then increment the count
//TODO If not the initialize the count to 1

const count = surveyResponses.reduce((table, response) => {
    console.log(table ," : ", response);

    // if (table[response]) {
    //     table[response] += 1
    // } else {
    //     table[response] = 1
    // }
    // return table;

    table[response] = (table[response] || 0) + 1 ; // shorter way(one line)
    return table;
},{})
console.log(count);


//? Output
// { A: 5, C: 3, B: 5, D: 1 }