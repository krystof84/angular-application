import { Component, OnInit } from '@angular/core';

import { Ingeredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingeredient[] = [
    new Ingeredient('Apples', 5),
    new Ingeredient('Tomatos', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
