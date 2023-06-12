import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  selectedFont!: string;
  selectedShape!: string;
  selectedColor!: string;
  selectedStyle!: string;
  selectedText!: string;
  logoText!: string;

  availableFonts: string[] = ['Arial', 'Helvetica', 'Times New Roman', 'Verdana'];
  availableShapes: string[] = ['Circle', 'Square', 'Triangle'];
  availableStyles: string[] = ['Bold', 'Italic', 'Underline'];

  get logoStyles() {
    return {
      'font-family': this.selectedFont,
      'background-color': this.selectedColor,
      'border-radius': this.getShapeStyle(),
      'font-weight': this.selectedStyle.includes('Bold') ? 'bold' : 'normal',
      'font-style': this.selectedStyle.includes('Italic') ? 'italic' : 'normal',
      'text-decoration': this.selectedStyle.includes('Underline') ? 'underline' : 'none'
    };
  }

  onFontChange() {
    // Обработка изменения шрифта
    this.logoStyles['font-family'] = this.selectedFont;
  }

  onShapeChange() {
    // Обработка изменения формы
    this.logoStyles['border-radius'] = this.getShapeStyle();
  }

  onColorChange() {
    this.logoStyles['background-color'] = this.selectedColor;
  }

  onStyleChange() {
    // Обработка изменения стиля
    // Обновление стиля текста
    this.logoStyles['font-weight'] = this.selectedStyle.includes('Bold') ? 'bold' : 'normal';
    this.logoStyles['font-style'] = this.selectedStyle.includes('Italic') ? 'italic' : 'normal';
    this.logoStyles['text-decoration'] = this.selectedStyle.includes('Underline') ? 'underline' : 'none';
  }

  onInputChange(event: any) {
    this.logoText = event.target.value;
  }

  saveAsImage() {
    const logoPreviewElement = document.querySelector('.logo-preview') as HTMLElement;
  
    html2canvas(logoPreviewElement).then(canvas => {
      // Convert the canvas to an image URL
      const imageURL = canvas.toDataURL('image/png');
  
      // Create a link element to download the image
      const downloadLink = document.createElement('a');
      downloadLink.href = imageURL;
      downloadLink.download = 'logo.png';
      downloadLink.click();
    });
  }



  getShapeStyle() {
    switch (this.selectedShape) {
      case 'Circle':
        return '50%';
      case 'Square':
        return '0';
      case 'Triangle':
        return '0 0 0 50%';
      default:
        return '50%';
    }
  }
}
