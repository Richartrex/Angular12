import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  

  constructor(private myService: HttpClient) {
  }

  public getImageOfTheDay(): Observable<string> {
    return this.myService.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").pipe(
      map(
        (param_data: any) => {
          let current = param_data.url;
          return current;
        }  
      )
    )
  }
}
