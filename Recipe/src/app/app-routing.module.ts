import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'recipe',
  pathMatch: 'full'
},
{
  path: 'recipe',
  component: RecipesComponent
},
{
  path: 'list',
  component: ShoppingListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
