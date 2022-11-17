import axios from 'axios';
import { useState, useEffect } from 'react';
import Question from './Items';

const Play = props => {

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const handleClick = e => {
    const topic = e.target.previousSibling.value;
    setFilteredQuestions(questions.filter(question =>
      question.tema == topic
    ));
    console.log(filteredQuestions);
  }

  const sendAnswer = e => {
    const topic = filteredQuestions
    setFilteredQuestions(questions.filter(question =>
      question.tema == topic
    ));
    console.log(filteredQuestions);
    let r = Math.floor(Math.random()*filteredQuestions.length);
    console.log(r);
  }

  useEffect(() => {
    axios.get('/question/preguntas')
      .then(res => {
       console.log(res.data);
       setQuestions(res.data);
     });
  },[]);

  return (
    <div>
      <br />
      <select>
        <option>Seleccionar Tema</option>
        <option>Matemática</option>
        <option>Inglés</option>
        <option>Historia</option>
        <option>Dragon Ball</option>
        <option>Fulbo</option>
        <option>Marvel</option>
      </select>
      <input type="button" value="Jugar" onClick={handleClick}/>
      <div>
        {filteredQuestions.map((question,idx) => {
          if (Math.floor(Math.random()*filteredQuestions.length) === idx){
            console.log(idx);
            return (<Question key={idx} question={question} />)
          }
        }
        )}
      </div>
    </div>
  );
}

export default Play;
