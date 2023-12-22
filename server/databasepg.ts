const {Client}= require('pg');

const client = new Client(
    {
        host: "localhost",
        user:"postgres",
        port:5432,
        password:"Plokplok00",
        database:"Employee"
    }
)

client.connect();

export function insertquestionintodatabase(questionid:number,askedby:number,team:number,questiontitle:string,questiondescription:string)
{
    console.log("at client",questionid,askedby,team,questiontitle,questiondescription)
client.query(`INSERT INTO
	 public."qna" (questionid,askedby,team,questiontitle,questiondescription,answers) VALUES (${questionid},${askedby},${team},'${questiontitle}','${questiondescription}','[]');`,(err:any,res:any)=>{
        if (!err)
        {
             console.log("data successfully added");
        }
        else{
            console.log(err);
        }
        client.end
    })
}

export function insertanswerintodatabase(questionid:any,answer:any)
{
client.query(`SELECT answers FROM public."qna" WHERE questionid=${questionid}`,(err:any,res:any)=>{
        if (!err)
        {
             var answers=res.rows[0]
             //console.log("before insert ",answers);
             answers.answers.push(answer);
             answers=answers.answers;
             //console.log("after insert ",answers);
             console.log(`UPDATE public."qna" SET "answers"='${JSON.stringify(answers)}' WHERE questionid=${questionid}`)
             client.query(`UPDATE public."qna" SET "answers"='${JSON.stringify(answers)}' WHERE questionid=${questionid}`,(errsec:any,ressec:any)=>{
                if (!errsec)
                {
                     console.log("");
                }
                else{
                    console.log(errsec);
                }
            })
        }
        else{
            console.log(err);
        }
        client.end
    })
}


export function getusersfromdatabase()
{   
    var result;
    const p=new Promise((resolve)=>{
        client.query(`SELECT * FROM public."Users" ORDER BY userid ASC`,(err:any,res:any)=>{
            if (!err)
            {
                 result=res.rows;
                 resolve(result);
            }
            else{
                console.log(err);
            }
            client.end
        })
    });
    return p;
}


export function getteamsfromdatabase()
{   
    var result;
    const p=new Promise((resolve)=>{
    client.query(`SELECT * FROM public."team" ORDER BY teamid ASC;`,(err:any,res:any)=>{
        if (!err)
        {
             result=res.rows;
             resolve(result);
        }
        else{
            console.log(err);
        }
        client.end
    })
});
    return p;
}


export function getqnafromdatabase()
{   
    var result;
    const p=new Promise((resolve)=>{
    client.query(`SELECT * FROM public."qna" ORDER BY questionid ASC`,(err:any,res:any)=>{
        if (!err)
        {
             result=res.rows;
             resolve(result);
        }
        else{
            console.log(err);
        }
        client.end
    }
)
});
    return p;
}


