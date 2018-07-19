import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient ) { }

  /**
     * Envia la solicitud a la Api para la creacion del perfil del profesional
     *
     * @param String token almacenado
     * @param object Datos del profesional
     * @returns respuesta del servidor o mensaje de error
     */
    crearProfesional( datosProfesional: any ){
      let accion = 'crearProfesional/';


      return this.http.post<ResponseInformationObjectInterface>( accion, datosProfesional );

    }



  subirFotoProfesional(  data: any){
      return Observable.create( (observer) => {
          let xhr = new XMLHttpRequest();
          let url = ""; //url completa de la API

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                observer.next( JSON.parse( xhr.response ) );
                observer.complete();
              } else {
                observer.error(xhr.response);
              }
            }
          };

          xhr.open("POST",url, true);
          xhr.send(data);
        }  );
    }

}
