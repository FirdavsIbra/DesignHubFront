import { Injectable } from "@angular/core";
import { IQuestion } from "../interfaces/question.interface";
import { Question } from "../models/question";

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    public questions: IQuestion[] = [
        {
            "id": 1,
            "question": "What is Angular?",    
            "a": "A programming language",    
            "b": "A framework for building web applications",    
            "c": "A database management system",    
            "d": "An operating system",    
            "correct": "A framework for building web applications"  
          },  
          {    
            "id": 2,
            "question": "What is the purpose of the Angular CLI?",    
            "a": "To create and manage Angular projects",    
            "b": "To deploy Angular applications",    
            "c": "To test Angular components",    
            "d": "To manage database migrations",    
            "correct": "To create and manage Angular projects"  
          },  
          {    
            "id": 4,
            "question": "What is a component in Angular?",    
            "a": "A reusable piece of UI that contains logic and data",    
            "b": "A type of directive that modifies the behavior of HTML elements",   
            "c": "A service that provides data to components",    
            "d": "A type of module that groups related components",    
            "correct": "A reusable piece of UI that contains logic and data"  
          },  
          {   
            "id": 5, 
            "question": "What is dependency injection in Angular?",    
            "a": "A way to inject external libraries into an Angular application",    
            "b": "A way to manage dependencies between Angular components",    
            "c": "A design pattern that separates concerns in an application",    
            "d": "A technique for passing objects to a component without creating them inside the component",    
            "correct": "A technique for passing objects to a component without creating them inside the component"  
          },  
          {  
            "id": 6,  
            "question": "What is the purpose of the ngOnInit() method in an Angular component?",    
            "a": "To initialize data that will be used in the component",    
            "b": "To handle user input in the component",    
            "c": "To handle HTTP requests in the component",    
            "d": "To render the component's template",    
            "correct": "To initialize data that will be used in the component"  
        }
    ];

    public question: IQuestion = new Question;

    public create(question: IQuestion): void { 
        this.questions.push(question);
    }

    public delete(q: IQuestion): boolean {
        const index = this.questions.findIndex(q => q.id === q.id);
        if(index !== -1){
            this.questions.splice(index, 1);
            return true;
        }
        return false;
    }

    public getAll(): IQuestion[] {
        return this.questions;
    }
}