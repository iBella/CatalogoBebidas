import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-cachaca',
  templateUrl: './catalogo-cachaca.component.html',
  styleUrls: ['./catalogo-cachaca.component.css']
})
export class CatalogoCachacaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pictures = [
    {
      id: 1,
      title: 'Heineken',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
      preco: 'R$ 15,00',
      teor: '0,7%',
      quantidade: '300ml',
      cor: 'Dourada',
      madeira: 'Mogno'
    },
    {
      id: 2,
      title: 'Backer',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      preco: 'R$ 3,00',
      teor: '4,7%',
      quantidade: '470ml',
      cor: 'Marrom',
      madeira: 'Mogno'
    },
    {
      id: 3,
      title: 'Wahls',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      preco: 'R$ 5,00',
      teor: '12,7%',
      quantidade: '300ml',
      cor: 'Clara',
      madeira: 'Carvalho'
    },
    {
      id: 4,
      title: 'Budweiser',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      preco: 'R$ 5,00',
      teor: '5,7%',
      quantidade: '350ml',
      cor: 'Branca',
      madeira: 'Carvalho'
    },
    {
      id: 5,
      title: 'Skol',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
      preco: 'R$ 10,00',
      teor: '3,7%',
      quantidade: '200ml',
      cor: 'Branca',
      madeira: 'Carvalho'
    },
    {
      id: 6,
      title: 'Brahma',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      preco: 'R$ 9,00',
      teor: '1,7%',
      quantidade: '500ml',
      cor: 'Ambar',
      madeira: 'Mogno'
    },
    
  ];

}
