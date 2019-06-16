import { Routes, RouterModule } from '@angular/router';

import {TemplateComponent} from './components/template/template.component';
import {DataComponent} from './components/data/data.component';
import {HomeComponent} from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'htmltemplate', component: TemplateComponent },
  { path: 'datatemplate', component: DataComponent},
  { path: '**',  pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
