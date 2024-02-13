// import './App.css'
import Student from './components/Student'
import Card from './components/Card'
import Greeting from './components/Greeting'
import List from './components/List'

function App() {
  const fruits = [
    {id: 1, name: "orange", calories: 95}, 
    {id: 2, name: "mango", calories: 45}, 
    {id: 3, name: "apple", calories: 105}, 
    {id: 4, name: "banana", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}
  ];
  return (
    <>
      {/* <Student name="Modou" age={20} isStudent={true}/>
      <Student name="Saikou" age={22} isStudent={false}/>
      <Student name="Ahmad" age={21} isStudent={true}/>
      <Student/> */}

      {/* <Greeting isLoggedIn={true} name="Ahmad"/> */}
      {/* <Greeting isLoggedIn={true}/> */}

      <List/>

    </>
  )
}

export default App
