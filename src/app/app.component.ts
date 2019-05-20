import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lat: Number = -16.67127375644847;
  public lng: Number = -49.23877828235197;

  public origin: any = { lat: -16.68470614, lng: -49.25463259 };
  public destination: any = { lat: -16.67127375644847, lng: -49.23877828235197 };

  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: false,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: false,
      // infoWindow: `
      //   <h4>Hello<h4>
      //   <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
      //   `
    },
  };
}
