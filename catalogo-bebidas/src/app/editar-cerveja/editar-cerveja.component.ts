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
      const cerveja$ = this.dataService.get_bebidasById(id);
      cerveja$.subscribe(cerveja => {
        console.log('======>', cerveja);
        this.updateForm(cerveja);
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
      imagem: [null, [Validators.required, Validators.minLength(3)]]
    });
  }
  updateForm(cerveja) {
    this.form.patchValue({
      id: cerveja.id,
      nome: cerveja.nome,
      descricao: cerveja.descricao,
      preco: cerveja.preco,
      teor: cerveja.teor,
      quantidade: cerveja.quantidade,
      estilo: cerveja.estilo,
      imagem: cerveja.imagem
    });
  }
}
