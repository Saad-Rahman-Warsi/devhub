

import * as express from 'express';
import {Application} from "express";
import { getTeams, getUsers, getUsersById,getTeamsById, getQuestionsById, getAnswersById, getQuestionByOuestionId } from './server/get.route';
import { saveAnswer, saveQuestion } from './server/save.route';

const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(cors({origin: true}));
app.use(bodyParser.json());


app.route('/users').get(getUsers);

app.route('/teams').get(getTeams);
app.route('/users/:userid').get(getUsersById);

app.route('/teams/:userid').get(getTeamsById);     
app.route('/qna/:userid/').get(getQuestionsById);    //problematic

app.route('/ques/').post(saveQuestion)     //problematic

app.route('/ans/:questionid').get(getAnswersById);

app.route('/quesbyid/:questionid').get(getQuestionByOuestionId);

app.route('/postans/:questionid').post(saveAnswer);    //problematic

const httpServer = app.listen(8500, () => {
    //console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});

