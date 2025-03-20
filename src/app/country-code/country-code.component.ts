import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
export interface Country {
  name: string;
  flag: string;
  code: string;
  dialCode: string;
}

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.scss'],
})

export class CountryCodeComponent  implements OnInit {
  
countries:Country[]=[];
constructor(private masterService: MasterService) {
}

ngOnInit() {
  this.getAllCountries();
}
getAllCountries() {
  this.masterService.getAllCountries().subscribe((res: any) => {
    this.countries = res;
  })
}

}
