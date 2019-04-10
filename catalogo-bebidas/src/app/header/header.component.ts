import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickCerveja(event: Event) {
    this.router.navigate(["/catalogo-cerveja"]);
  }
  onClickCachaca(event: Event) {
    this.router.navigate(["/catalogo-cachaca"]);
  }
  onClickAdd(event: Event) {
    this.router.navigate(["/adicionar"]);
  }
}
