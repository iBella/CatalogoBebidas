import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editar-cerveja",
  templateUrl: "./editar-cerveja.component.html",
  styleUrls: ["./editar-cerveja.component.css"]
})
export class EditarCervejaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params["id"];
      console.log(id);
      const bebida$ = this.dataService.get_bebidasById(id);
      bebida$.subscribe(bebida => {
        this.updateForm(bebida);
      });
    });

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      preco: [null, [Validators.required, Validators.minLength(3)]],
      teor: [null, [Validators.required, Validators.minLength(3)]],
      quantidade: [null, [Validators.required, Validators.minLength(3)]],
      estilo: [null, [Validators.required, Validators.minLength(3)]],
      imagem: [null, [Validators.required, Validators.minLength(3)]],
      tipo: ["CERVEJA"]
    });
  }
  updateForm(bebida) {
    this.form.patchValue({
      id: bebida.id,
      nome: bebida.nome,
      descricao: bebida.descricao,
      preco: bebida.preco,
      teor: bebida.teor,
      quantidade: bebida.quantidade,
      estilo: bebida.estilo,
      imagem: bebida.imagem
    });
  }

  onUpdate() {
    if (this.form.valid) {
      if (this.form.value.id) {
        this.dataService
          .put_bebidas(this.form.value)
          .subscribe(
            success => console.log("sucesso!"),
            error => console.error(error),
            () => console.log("Update OK")
          );
      } else {
        this.dataService
          .post_bebida(this.form.value)
          .subscribe(
            success => console.log("sucesso!"),
            error => console.error(error),
            () => console.log("Request OK")
          );
      }
    }
  }

  onDelete() {
    if (this.form.value.id) {
      this.dataService
        .delete_bebidas(this.form.value)
        .subscribe(
          success => console.log("sucesso!"),
          error => console.error(error),
          () => console.log("DELETE OK")
        );
    }
  }
}
