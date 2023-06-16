import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent {
  public selectedLogo!: number;
  selectedImage: string | null = null;

  public constructor(private router: Router) { }

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
      default: return 'image not found'
    }
  }

  uploadLogo() {
    console.log(this.selectedLogo);
    console.log(this.selectLogo(this.selectedLogo))
    this.router.navigateByUrl('main/chat');
  }
}
