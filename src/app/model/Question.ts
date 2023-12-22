import { User } from "./User";
import { Answer } from "./Answer";

export interface Question{
    questionid:number;
    questiontitle:string;
    questiondescription:string;
    askedby:string;
    answers:Answer[];
}