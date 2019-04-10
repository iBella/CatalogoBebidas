import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-catalogo-cerveja",
  templateUrl: "./catalogo-cerveja.component.html",
  styleUrls: ["./catalogo-cerveja.component.css"]
})
export class CatalogoCervejaComponent implements OnInit {
  public cervejas = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.dataService.get_cervejas().subscribe((res: any[]) => {
      console.log(res);
      this.cervejas = res;
    });
  }

  onEdit(id) {
    this.router.navigate(['editar/cerveja', id]); 
  }

  ngOnInit() {}
}
