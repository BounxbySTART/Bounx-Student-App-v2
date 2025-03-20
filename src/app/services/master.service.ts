import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpService) { }
  getAllCountries(){
    return this.http.get(environment.masterUrl.concat('master/countries')); //returning Observable
   }
}
