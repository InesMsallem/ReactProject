import "./App.css";
import Products from "./Components/Products"
function App() {
  // const person ={
  //   fName : "xxxx",
  //   lName : "yyyy",
  //   showInfo (){
  //     console.log(`First name is ${this.fName} and last name is ${this.lName}`);
  //   }
  // }

  // const p1 = Object.create(person)
  // p1.fName = "foulen"
  // p1.lName = "ben foulen"
  // p1.showInfo();

  // let somme = function(x,y) {
  //   return x+y
  // }

  // let somme2 = (a,b)=>{return a+b}
  // console.log(somme2(5,2))

  // const users = [
  //   {name:'mohamed',age:10},
  //   {name:'ali',age:15},
  //   {name:'khaled', age:23},
  //   {name:'salima',age:19}
  // ];
  // const testAdulte = users.map(person=> person.age>18 ? console.log(`${person.name} is an adult`):
  // console.log(`${person.name} is not an adult`))

  // function getUser(){
  //   return {
  //     username:"claude",
  //     email:"claude@gb.tn"
  //   }
  // }
  // const {username,email} = getUser()
  // console.log(username,"|||||",email)

  // const user = {
  //   username: "claude",
  //   email: "claude@gb.tn"
  // };

  // const newUser = {
  //   ...user,
  //   class:"4TWIN3"

  // }
  // console.log(newUser)

  //workshop
  //Q1
  // const students = ["khaled","ahmed","youssef","mohammed"]

  // const find = (students)=>{
  //   let newSt = students.map((elmement )=>{
  //     return {
  //       mot:elmement,
  //       length:elmement.length
  //     }
  //   })

  //   return newSt.reduce((acc,cur)=>{
  //     return acc.length>cur.length ? acc : cur
  //   })

  // }
  // console.log(find(students))

  //Q2
  const tab = ["a", "a", "b", "b", "b", ["c", "b"]];
  const tablFlat = tab.flat();
  console.log(tablFlat);
  const counts = {};
  for (const num of tablFlat) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log(counts);
  console.log(counts["a"], counts["b"], counts["c"]);
  //tab.reduce((acc, el) => ((acc[el] = (acc[el] || 0) + 1), acc), {})

  //Q3
  let students = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "John", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
  const moinsCinquante = students.map((student) => {
    if (student.marks < 50) {
      student.marks += 15;
    }
    return student;
  });
  console.log(moinsCinquante);
  const SupCinquante = moinsCinquante.filter((student) => student.marks > 50);
  console.log(SupCinquante);
  const sReduce = SupCinquante.reduce((acc, elem) => acc + elem.marks, 0);
  console.log(sReduce);

  //return (
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // <div>
  //  <h1>HEHE {1 + 2} </h1>
  //</div>
  // );
  let student = { name: "inès", d: "kk" };
  // f blasset return
  const lista = [
    { nom: "ahla", prenom: "bik", id: 1 },
    { nom: "ahla", prenom: "bikkk", id: 2 },
  ];
  return (
    <>
      <Products></Products>
    </>
  );
}

export default App;




