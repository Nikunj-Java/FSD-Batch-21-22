import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {path:"http",component:UserListComponent},
    {path:"crud",component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
