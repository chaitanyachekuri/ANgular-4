import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('Recipe1', 'Recipe Desc', 'http://i.ndtvimg.com/i/2015-11/indian-food-625_625x350_51448018868.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
