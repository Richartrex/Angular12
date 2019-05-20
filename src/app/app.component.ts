import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NasaAngular12';
  imageTitle:string;

  constructor(private myService:NasaService){
    this.imageTitle = "";

    this.myService.getImageOfTheDay().subscribe(
      (param_imageTitle:string) =>{
        this.imageTitle = param_imageTitle;
      }
    )
  }
}
