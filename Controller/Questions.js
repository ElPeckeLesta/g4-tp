import Question from '../Models/Preguntas.js';

const getAllQuestions = (req, res) => {
  Question.find((err, Questions) => {
    res.status(200).json(Questions);
  });
};

const getQuestionsById = (req, res) => {
  Question.findById(req.params.id, (err, Questions) => {
    res.status(200).json(Questions);
  });
};

const createQuestion = (req, res) => {
  const id = req.params.id;
  const { text, answers } = req.body;
  const question = new Question({ text, answers });
  question.save((err, Question) => {
    res.status(201).json(question);
  });
};

const updateQuestion = (req, res) => {
  const id = req.params.id;
  const { text, answers } = req.body;
  const question = { text, answers };
  const options = {
    new: true
  };
  Question.findByIdAndUpdate(id, question, options, (err, question) => {
    res.status(200).json(question);
  });
};

const deleteQuestion = (req, res) => {
  Question.findByIdAndDelete(req.params.id, err => {
    const msg = {text: "Se borró todo OK"}
    res.status(200).json(msg);
  });
}

const getQuestionsByIdRandom = (req , res) => {
  const r = "runmama";
  Question.findById(req.params.id, (err, Questions) => {
    res.status(200).json(Questions);
  });
}

const Controller = {
  getAllQuestions,
  getQuestionsById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

export default Controller;
