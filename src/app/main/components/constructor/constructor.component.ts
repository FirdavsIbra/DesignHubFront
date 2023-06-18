import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IGetMe } from 'src/app/models/getMe';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent {
  selectedFont!: string;
  selectedShape!: string;
  selectedColor!: string;
  selectedStyle!: string;

  availableFonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Verdana'];
  availableShapes: string[] = ['Круг', 'Квадрат', 'Треугольник', 'Ромб'];
  availableStyles: string[] = ['Bold', 'Italic', 'Underline'];

  public constructor(private requestService: RequestService) { }

  public onNext(): void {
    this.requestService.getMe().subscribe({
      next: (response: IGetMe) => {
        this.requestService.addDesign(response.id, this.selectedFont, this.selectedShape, this.selectedColor, this.selectedStyle);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
