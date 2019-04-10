import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro-escolha",
  templateUrl: "./cadastro-escolha.component.html",
  styleUrls: ["./cadastro-escolha.component.css"]
})
export class CadastroEscolhaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickAddCachaca(event: Event) {
    this.router.navigate(["/adicionar/cachaca"]);
  }
  onClickAddCerveja(event: Event) {
    this.router.navigate(["/adicionar/cerveja"]);
  }
}
