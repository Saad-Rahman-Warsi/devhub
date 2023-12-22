import {Request, Response} from 'express';
import {TEAMS} from '../src/assets/data/team'
import { QNA } from '../src/assets/data/qna';
import {getteam} from './get.route'
import { getqnafromdatabase, getteamsfromdatabase, insertquestionintodatabase,insertanswerintodatabase } from './databasepg';







export function saveQuestion(req: Request, res: Response) {
    getteamsfromdatabase().then((teamarr)=>{
        getqnafromdatabase().then((qnaarr:any)=>{
    const request=req.body;
    var re:any =JSON.stringify(request);
    console.log(re);
    var questiontitle=request.questiontitle;
    var questiondescription=request.questiondescription;
    var team=getteam(teamarr,request.team);
    var user=request.userid;
    console.log(qnaarr.length,user,team,questiontitle,questiondescription)
    insertquestionintodatabase(qnaarr.length,user,team,questiontitle,questiondescription)
    res.status(200).json(request);
    }
    )})
}

export function saveAnswer(req: Request, res: Response) {
    const questionid = req.params['questionid'];
    const request=req.body;
    console.log(JSON.stringify(request))
    //var re:any =JSON.stringify(request);
    insertanswerintodatabase(questionid,request) 
    res.status(200).json(request);
    
}