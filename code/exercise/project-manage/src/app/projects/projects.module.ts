import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';

import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjectsContainerComponent,
    ProjectListComponent, 
    ProjectCardComponent, 
    ProjectFormComponent,
    ValidationErrorsComponent,
    ProjectDetailComponent,
    ProjectDetailContainerComponent
  ],
    
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ProjectsContainerComponent]
})
export class ProjectsModule { }
