import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent {
  selectedFont!: string;
  selectedShape!: string;
  selectedColor!: string;
  selectedStyle!: string;

  availableFonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Verdana'];
  availableShapes: string[] = ['Circle', 'Square', 'Triangle'];
  availableStyles: string[] = ['Bold', 'Italic', 'Underline'];

  public constructor(private router: Router, private requestService: RequestService) { }

  public onNext(): void {
    const selectedValues = {
      font: this.selectedFont,
      shape: this.selectedShape,
      color: this.selectedColor,
      style: this.selectedStyle
    };
    
    console.log(selectedValues);
    this.requestService.addDesign(1, this.selectedFont, this.selectedColor, this.selectedStyle, this.selectedShape);
  }
}
