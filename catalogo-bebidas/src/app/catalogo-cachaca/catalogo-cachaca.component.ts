import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-catalogo-cachaca",
  templateUrl: "./catalogo-cachaca.component.html",
  styleUrls: ["./catalogo-cachaca.component.css"]
})
export class CatalogoCachacaComponent implements OnInit {
  public cachacas = [];

  constructor(private dataService: DataService) {
    this.dataService.get_cachacas().subscribe((res: any[]) => {
      console.log(res);
      this.cachacas = res;
    });
  }

  ngOnInit() {}
}
