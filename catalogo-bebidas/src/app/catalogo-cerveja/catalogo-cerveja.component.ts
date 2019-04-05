import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalogo-cerveja',
  templateUrl: './catalogo-cerveja.component.html',
  styleUrls: ['./catalogo-cerveja.component.css']
})
export class CatalogoCervejaComponent implements OnInit {
  public pictures = [];


  constructor(private dataService: DataService) {

    this.dataService.get_pictures2().subscribe((res: any[]) => {
      console.log(res);
      this.pictures = res;
    });


  }

  ngOnInit() {
  }



}
