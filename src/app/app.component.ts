import { Component } from '@angular/core';
import { NasaService } from './nasa.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NasaAngular12';
  image:string;

  constructor(private myService:NasaService){
    this.image = "";

    this.myService.getImageOfTheDay().subscribe(
      (param_image:string) =>{
        this.image = param_image;
      }
    )
  }
}
