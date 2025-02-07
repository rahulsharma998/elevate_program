import {  useState } from "react"

const mcqQuestions = [
  {
    id: 1,
    question: "What is React primarily used for?",
    options: ["Data Science", "Mobile Apps", "Building User Interfaces", "Networking"],
    correctAnswer: 3, // "Building User Interfaces"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: 1, // "useState"
  },
  {
    id: 3,
    question: "Which lifecycle method is used for side effects in functional components?",
    options: ["componentDidMount", "useEffect", "shouldComponentUpdate", "componentWillUnmount"],
    correctAnswer: 2, // "useEffect"
  },
  {
    id: 4,
    question: "How do you update state based on the previous state in React?",
    options: [
      "setState(newValue)",
      "setState(prevState => newValue)",
      "setState(() => newValue)",
      "setState(value, prevState)"
    ],
    correctAnswer: 2, // "setState(prevState => newValue)"
  },
  {
    id: 5,
    question: "What is the correct way to pass data from parent to child component?",
    options: ["State", "Props", "Context", "Ref"],
    correctAnswer: 2, // "Props"
  }
];


function App() {
 
  const [question,setQuestion]=useState("");
  const [answer,setAnswer]=useState("");
  const [correctAnswer,setCorrectAnswer]=useState();
  const [attempt,setAttempt]=useState(3);
  const [scores,setScores]=useState(0);
  const [rightAnswer,setRightAnswer]=useState(0);
  const [wrongAnswer,setWrongAnswer]=useState(0);

  


  function checkAnswer(){
    if (answer===correctAnswer){
      alert("Your Answer is correct")
      setScores(prev=>prev+1)
      setRightAnswer(prev=>prev+1)
    }else{
      setAttempt(prev=>prev-1)
      setWrongAnswer(prev=>prev+1)
      alert(`Your answer is not correct. Please try again and ${attempt} left`)
    }
    if(attempt==="0"){
      alert("Your attempts are over, and you cannot attempt it anymore")
    }
  }
  
  return(
    <>
      <div id="container">
          <h1>Quiz App</h1>
          <p>Attempt Left:{attempt}</p>
          <p>Scores:{scores}</p>
          <p>Right Answers:{rightAnswer}</p>
          <p>Wrong Answer:{wrongAnswer}</p>
          {mcqQuestions.map((i)=>{
            <li key={i.id}>
              <p>{i.question}</p>
              <div>
                <input type="radio"/>
                <label>{i.options[0]}</label>
              </div>
              <div>
                <input type="radio"/>
                <label>{i.options[1]}</label>
              </div>
              <div>
                <input type="radio"/>
                <label>{i.options[2]}</label>
              </div>
              <div>
                <input type="radio"/>
                <label>{i.options[3]}</label>
              </div>
              <button>Next</button>
            </li>
            
          })}
      </div>
    </>
  )

}

export default App
