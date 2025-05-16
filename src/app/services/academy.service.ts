import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcademyService {
  constructor(public http: HttpService) {}

  // /{searchType}/{searchTerm}
  searchAcademy(searchText: string) {
    return this.http.get(
      environment.masterUrl.concat(`academy/search/${searchText}`)
    );
  }
}
