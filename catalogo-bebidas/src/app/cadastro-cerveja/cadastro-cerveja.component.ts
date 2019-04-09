import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro-cerveja',
  templateUrl: './cadastro-cerveja.component.html',
  styleUrls: ['./cadastro-cerveja.component.css']
})
export class CadastroCervejaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      tipo: ["CERVEJA"],
      preco: [null, [Validators.required, Validators.minLength(3)]],
      teor: [null, [Validators.required, Validators.minLength(3)]],
      quantidade: [null, [Validators.required, Validators.minLength(3)]],
      estilo: [null, [Validators.required, Validators.minLength(3)]],
      imagem: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  OnSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.dataService.post_bebida(this.form.value).subscribe(
        success => console.log('sucesso!'),
        error => console.error(error),
        () => console.log('Request OK')
      );
    }
  }


}
