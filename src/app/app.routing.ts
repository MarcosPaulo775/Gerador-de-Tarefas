import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes  , RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    //{path:'Alocacao' , component: AlocacaoComponent , outlet:'popup'},
    {path:'Pessoa', loadChildren: 'app/components/pessoas/pessoas.module#PessoasModule'},
    {path:'Alocacao', loadChildren: 'app/components/alocacao/alocacao.module#AlocacaoModule'},
    {path:'Tarefas', loadChildren: 'app/components/tarefas/tarefas.module#TarefasModule'},
    {path:'' , redirectTo:'/Pessoa' , pathMatch:'full'},
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {}