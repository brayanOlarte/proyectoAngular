import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

private datos: any = {};
/*  public retPostData;
	public retGetData;
	datosMostrar: any = {};
	datos: any = {} ;

  constructor(private http: HttpClient) { }

  onNameKeyUp(event: any){

  }*/

  ngOnInit() {
  //  this.datos.nombre= "";
  //	this.datosMostrar.FstVarValues= "chao";
  }
  public imprimir(){
     console.log( this.datos );
   }
/*
  public PostData() {
  		const url = "" ;
  		let datos = {FstVarValues: 'hola', SndVarValues: 'hola mundo'};
  		this.http.post(url, datos ).subscribe(
  			data => {
  				console.log(data);
  				this.datosMostrar = data;
  			}
  		);

  	}

  	public GetData() {
  		const url = "";
  		this.http.get(url).subscribe(
  			data => {
  				console.log(data);
  			}
  		);

  	}

  	public PutData() {
  		const url = "";
  		this.http.put(url, {DataVar1:'val1', DataVar2:'val2'})
  		.subscribe(data => {console.log(data)},err=>{console.log("Error ocurrente")});
  	}

  	public DeleteData() {
  		const url = "";
  		this.http.delete(url).subscribe(
  			data => {console.log(data)},err=>{console.log("Error ocurrente")});
  	}
*/
}
