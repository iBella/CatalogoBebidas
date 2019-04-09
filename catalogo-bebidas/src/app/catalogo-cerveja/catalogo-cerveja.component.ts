import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalogo-cerveja',
  templateUrl: './catalogo-cerveja.component.html',
  styleUrls: ['./catalogo-cerveja.component.css']
})
export class CatalogoCervejaComponent implements OnInit {
  public cervejas = [];


  constructor(private dataService: DataService) {

    this.dataService.get_cervejas().subscribe((res: any[]) => {
      console.log(res);
      this.cervejas = res;
    });
  }

  ngOnInit() {
  }



}
