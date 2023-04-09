import { IQuestion } from "../interfaces/question.interface";

export class Question implements IQuestion {
    id!: number;
    question!: string;
    a!: string;
    b!: string;
    c!: string;
    d!: string;
    correct!: string;
}