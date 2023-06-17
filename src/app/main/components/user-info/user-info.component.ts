import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ICompany } from 'src/app/models/company';
import { IDesign } from 'src/app/models/design';
import { ISketch } from 'src/app/models/sketch';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userId!: number;
  company?: ICompany;
  design?: IDesign;
  sketch?: ISketch;
  username?: string;

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId'];
    this.getCompany();
    this.getDesign();
    this.getSketch();
    this.getUsername();
  }

  getCompany(){
    this.requestService.getCompanyByUserId(this.userId).subscribe({
      next: (repsonse: any) =>{
        this.company = repsonse;
      }
    });
  }

  getDesign(){
    this.requestService.getDesignByUserId(this.userId).subscribe({
      next: (repsonse: any) =>{
        console.log(repsonse);
        this.design = repsonse;
      }
    });
  }

  getSketch(){
    this.requestService.getSketchByUserId(this.userId).subscribe({
      next: (repsonse: any) =>{
        this.sketch = repsonse;
      }
    });
  }

  getUsername(){
    this.requestService.getUsernameById(this.userId).subscribe({
      next: (repsonse: any) =>{
        this.username = repsonse.name;
      }
    });
  }

}
