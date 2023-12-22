import {Request, Response} from 'express';
import { USERS } from '../src/assets/data/user';
import { TEAMS } from '../src/assets/data/team';
import { ACCESS } from '../src/assets/data/access';
import { Team } from '../src/app/model/Team';
import { Question } from '../src/app/model/Question';
import { Answer } from '../src/app/model/Answer';
import { QNA } from '../src/assets/data/qna';
import { getusersfromdatabase } from './databasepg';
import { getteamsfromdatabase } from './databasepg';
import {getqnafromdatabase} from './databasepg';


export function getUsers(req: Request, res: Response) {

    getusersfromdatabase().then((result:any)=>{ 
        var arr=[]
        for (let i of result)
        {
            arr.push({"userid":i.userid,
            "username":i.username,
            "password":i.password})
        }
    res.status(200).json(arr);
    })


}

export function getTeams(req: Request, res: Response) {

    getteamsfromdatabase().then((result:any)=>{ 
    res.status(200).json(result);
    })

}

export function getUsersById(req: Request, res: Response)
{
    getusersfromdatabase().then((result)=>{ 

    const userId = req.params['userid'];

    const users: any = result;

    const user = users[userId];

    
    
    res.status(200).json({"userid":user.userid,
    "username":user.username,
    "password":user.password});})
   
    
    
}





export function getAnswersById(req:Request, res:Response)
{
    getqnafromdatabase().then((result:any)=>{ 
    const questionid = req.params['questionid'];
    var answer:Answer[]=[];
    answer=result[questionid].answers;
    res.status(200).json(answer);
    });
}

export function getQuestionByOuestionId(req:Request, res:Response)
{
    getqnafromdatabase().then((result:any)=>{ 
    const questionid = req.params['questionid'];
    const qna:any = result[questionid];
    res.status(200).json(qna);
});
}

export function getTeamsById(req: Request, res: Response)
{
    getusersfromdatabase().then((result:any)=>{
        getteamsfromdatabase().then((resultteams:any)=>{ 
    const userId = req.params['userid'];
    const teams=result[userId].canaccess;
    //console.log("result= ",result)
    //console.log("resultteamds= ",resultteams)
    var team:Team[];
    team=fillteam(resultteams,teams);
    res.status(200).json(team);
        })
    })
}

function fillteam(tt:any,subteam:number[]):Team[]
{
    console.log("line 98 subteam= "+subteam)
    
    var team:Team[]=[];
    if (subteam.length!=0)
    {
        console.log("subteam= "+subteam)
    for (var i of subteam)
    {
        //console.log("i="+i)
        var te:Team={"name":"","subteams":[]};
        te.name=tt[i].name;
      //  console.log("tt[i].name="+tt[i].name);
        te.subteams=fillteam(tt,tt[i].subteams);
        team.push(te);
    }
    }
    return team;
}

export function getQuestionsById(req: Request, res: Response)
{
    getusersfromdatabase().then((result:any)=>{ 
        getteamsfromdatabase().then((resultteam:any)=>{
            getqnafromdatabase().then((resultqna:any)=> {
    const userId = req.params['userid'];
    const teams:number[]=result[userId].canaccess;
    var questions:Question[]=fillquestions(resultqna,resultteam,teams);
    console.log(questions);
    res.status(200).json(questions);
            })
        })
    })
}





function fillquestions(tt:any,tea:any,subteam:number[]):Question[]
{
  
    var team:Team[]=[];
    var questions:Question[]=[];
    //console.log(tt);
    if (subteam.length!=0)
    {
    for (var i of subteam)
    {
       // console.log(tt[i])
        //var question:Question[]=[];
        if (tt[i]!=undefined)
        {
        for (let ques of tt)
        {
            if (ques.team==i)
            {
                questions.push(ques);
            }
        //console.log(questions);
        }    
    }
        //console.log("fillquestions(tea[i].subteams)="+fillquestions(tea[i].subteams));
        for (let ques of fillquestions(tt,tea,tea[i].subteams))
        {
            questions.push(ques);
        }
        //team.push(te);
    }
    }
    return questions;
}



export function getteam(tea:any,team:string):number    //get teamid from team name;
{
    
    var num=-1;
    var teaid=-1;
    for (let i of tea)
    {
        num++;
        if (tea[num].name==team)
        {
            teaid=num;
        }
    }
    return teaid;
}
