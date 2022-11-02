import mongoose from 'mongoose';
import express from 'express';

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  text: String,
  correct: Boolean
}, {_id: false});

const questionSchema = new Schema({
  text: String,
  img: String,
  answer: [answerSchema]
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
