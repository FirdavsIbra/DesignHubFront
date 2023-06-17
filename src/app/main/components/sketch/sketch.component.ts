import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IGetMe } from 'src/app/models/getMe';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent {
  public selectedLogo!: number;
  selectedImage: string | null = null;

  public constructor(private requestService: RequestService) { }

  public selectLogo(logoNumber: number): string {
    this.selectedLogo = logoNumber;
    switch(logoNumber) {
      case 1:
        return "../../../../assets/sketches/logo1.png";
      case 2:
        return "../../../../assets/sketches/logo2.png";
      case 3:
        return "../../../../assets/sketches/logo3.png";
      case 4:
        return "../../../../assets/sketches/logo4.png";
      case 5:
        return "../../../../assets/sketches/logo5.png";
      case 6:
        return "../../../../assets/sketches/logo6.png";
      default: return 'Картинка не найдена'
    }
  }

  public uploadLogo(): void {
    const file_path = this.selectLogo(this.selectedLogo);
    if(file_path === "Картинка не найдена"){
      alert("Пожалуйста выберите эскиз.");
      return;
    }
    this.requestService.getMe().subscribe({
      next: (response: IGetMe) => {
        this.requestService.addSketch(response.id, file_path);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
