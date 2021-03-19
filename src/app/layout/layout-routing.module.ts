import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from '../pages/address-form/address-form.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DragDropComponent } from '../pages/drag-drop/drag-drop.component';
import { TableComponent } from '../pages/table/table.component';
import { TreeComponent } from '../pages/tree/tree.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'address-form',
    component: AddressFormComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },

  // { path: "rtl", component: RtlComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
