import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CeditorComponent} from './modules/ceditor/ceditor.component'

const routes: Routes = [
  {
    path: '',
    component: CeditorComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
