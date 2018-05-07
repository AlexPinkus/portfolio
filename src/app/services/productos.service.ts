import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos : any[] = [];
  cargando_productos : boolean = true;

  constructor(private http: Http) { 
    this.cargar_productos();
  }
  
  public cargar_productos(){
    if(this.productos.length === 0 ){
      this.cargando_productos = true;
      this.http.get("https://paginaweb-9d7e1.firebaseio.com/productos_idx.json")
                .subscribe ( res =>{
                  console.log(res.json());
                  //setTimeout(()=>{
                    this.cargando_productos = false;
                    this.productos = res.json();
                  //}, 5000)
                });
    }
  }
}
