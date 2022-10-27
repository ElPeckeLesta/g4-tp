import express from 'express';
import Controller from '../Controller/elquevosquieras.js';

const router = express.Router();

router.route('/question/preguntas')
  .get(Controller.getAllQuestions)
  .post(Controller.createQuestion)

router.route('/question/:id')
  .get(Controller.getQuestionsById)
  .put(Controller.updateQuestion)
  .delete(Controller.deleteQuestion);

export default router;

// {
//   "text": "¿Jantus es...?",
//   "answer": [
//     {"text": "una profesora", "correct": false},
//     {"text": "Jabba", "correct": true},
//     {"text": "una ardilla", "correct": true},
//     {"text": "tumama", "correct": false}
//   ]
// }

// {
//   "text": "¿Aprobaremos esto?",
//   "img": "lalala"
//   "answer": [
//     {"text": "SI", "correct": false},
//     {"text": "NO", "correct": true},
//     {"text": "NO SE", "correct": false},
//     {"text": "Trini es buen profesor", "correct": false}
//   ]
// }
