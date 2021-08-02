import { HttpClientModule } from '@angular/common/http';
import { NgxTimeSchedulerModule } from 'ngx-time-scheduler';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { IterationComponent } from './components/iteration/iteration.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './components/tags/tags.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectLoginComponent } from './components/project-login/project-login.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AddTagsComponent } from './components/add-tags/add-tags.component';
import { AddTagsSearchBarComponent } from './components/add-tags-search-bar/add-tags-search-bar.component';
import { AddTagsAddedTagsComponent } from './components/add-tags-added-tags/add-tags-added-tags.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewProjectsComponent,
    CreateProjectComponent,
    ProjectDetailComponent,
    IterationComponent,
    TagsComponent,
    NavComponent,
    ProjectLoginComponent,
    TimelineComponent,
    AddTagsComponent,
    AddTagsSearchBarComponent,
    AddTagsAddedTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTimeSchedulerModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatSortModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
