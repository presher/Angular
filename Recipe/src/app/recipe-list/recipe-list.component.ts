import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // new Recipe('Spagehtti', 'This is simple a test', 'https://www.seriouseats.com/thmb/ojnVwwGNvVzg06Nlos5VYbMyFUU=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg' ),
    new Recipe('Rye Shortcakes With Strawberry-Mandarinquat Compote And Citrus Labneh','When strawberries are small and young, their leaves are still tiny and tender. Keep them on the berries for both aesthetics and the earthy taste they impart that balances the sweet fruit and rich biscuit. If you’re using kumquats, thinly slice them just like the mandarinquats because their skin is edible too. But if you’re using another citrus with a bitter, thick rind, peel the rind from the citrus and slice the fruit into thin wheels or segments.','https://ca-times.brightspotcdn.com/dims4/default/807c3bc/2147483647/strip/true/crop/1343x895+125+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb2%2Fac%2F6728c2f9ef1ba733b2839ccdb5cd%2Fla-1556045187-0737ycyrlo-snap-image')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
