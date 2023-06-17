import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { API_URL } from "src/app/constants/api.url";

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    public constructor(private http: HttpClient, private router: Router) { }

    public addSketch(_userId: number, _filePath: string){
        const apiUrl = `${API_URL}sketches`;
        const sketch = {
            userId : _userId,
            filePath: _filePath
        };
        this.http.post(apiUrl, sketch).subscribe({
            next: (response: any) => {
                this.router.navigateByUrl('main/chat');
            }
        })
    }

    public addCompany(_userId: number, _name: string, _description: string, _uniqueness: string, _logoConcept: string): void {
        const apiUrl = `${API_URL}company`;
        const company = {
            userId : _userId,
            name: _name,
            description: _description,
            uniqueness: _uniqueness,
            logoConcept: _logoConcept
        };
        this.http.post(apiUrl, company).subscribe({
            next: (reponse: any) => {
                this.router.navigateByUrl('main/constructor')
            } 
        });
    }

    public addDesign(_userId: number, _font: string, _shape: string, _color: string, _style: string): void {
        const apiUrl = `${API_URL}design`;
        const design = {
            userId: _userId,
            font: _font,
            color: _color,
            style: _style,
            form: _shape
        };
        this.http.post(apiUrl, design).subscribe({
            next: (response: any) => {
                console.log(response);
                this.router.navigateByUrl('main/sketch');

            },
            error: (error: any) => {
                console.log(error);
                alert("Пожалуйста выберите всё")
            }
        })
    }

    public getCompanyByUserId(userId: number){
        const apiUrl = `${API_URL}company/${userId}`;
        return this.http.get(apiUrl);
    }

    public getAllUsers(): Observable<any> {
        const apiUrl = `${API_URL}users`;
        return this.http.get(apiUrl);
    }

    public getMe(): Observable<any> {
        const token = localStorage.getItem('token');
        const apiUrl = `${API_URL}auth/getMe`;

        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
        
        return this.http.get(apiUrl, { headers });
    }

    public getSketchByUserId(userId: number){
        const apiUrl = `${API_URL}sketches/${userId}`;
        return this.http.get(apiUrl);
    }

    public getDesignByUserId(userId: number){
        const apiUrl = `${API_URL}design/${userId}`;
        return this.http.get(apiUrl);
    }

    public getUsernameById(userId: number){
        const apiUrl = `${API_URL}users/${userId}`;
        return this.http.get(apiUrl);
    }
}