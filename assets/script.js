const topic = [
  "HTML", 
  "CSS",
  "Javascript",
  "Git"
]

const selected = "HTML"

for(let i = 0; i < topic.length; i++) {
  console.log(topic[i])
  if (selected === topic[i]) {
    console.log(topic[i])
  }
}

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }