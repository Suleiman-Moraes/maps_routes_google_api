import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http: HttpClient
  ){}

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

  private buscarPedidoEmAndamento(userId: any): Observable<any>{
    return this.http.get(`localhost:8080/pedido/user/${userId}/andamento`).pipe(
      map(this.fromJsonResponseApi.bind(this)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

  private fromJsonResponseApi(jsonData: any): any{
    return Object.assign(any, jsonData);
  }
}
