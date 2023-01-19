import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http :HttpClient ) { }
  readonly  baseUrl = 'https://backend-music-school.vercel.app/Orders';
  readonly  baseUrlorders = 'https://backend-music-school.vercel.app/userOrders';
  getOrder (_id :any)
  {
  
    return this.http.get(this.baseUrl +`/${_id}`)
  
  }
  
  getOrdersEmail (idUser :String):Observable<any>
  {
  
    return this.http.get<any>(this.baseUrlorders +`/${idUser}`)
  
  }
  



getOrders ():Observable<any>
{

  return this.http.get<any>(this.baseUrl)

}

postData(data :any):Observable<any>
{

  return this.http.post<any>(this.baseUrl,data);
}



}
