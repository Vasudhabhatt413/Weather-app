import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cityName: string = ""
  baselink: string = "https://api.openweathermap.org/data/2.5/weather";
  apiKey:string="8ef593dde98e87f826c774741779ab14";
 data:any;
  constructor(private ss :ServicesService) { }

  ngOnInit(): void {
  }
  reset(){
    this.cityName="";
  }
  fetchWeather() {
    var url = `${this.baselink}?q=${this.cityName}&appid=${this.apiKey}`
    this.ss.getWeatherDetails(url)
      .subscribe(
       res => {
          this.data = res;
        },
        err => {
          this.data = err;
        }
      )
  }


}
