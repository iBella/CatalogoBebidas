import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalogo-cerveja',
  templateUrl: './catalogo-cerveja.component.html',
  styleUrls: ['./catalogo-cerveja.component.css']
})
export class CatalogoCervejaComponent implements OnInit {
  private pictures = [];


  constructor(private dataService: DataService) {

    this.dataService.get_pictures().subscribe((res: any[]) => {
      this.pictures = res;
    });


  }

  ngOnInit() {
  }



}
