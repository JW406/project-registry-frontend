import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Phase } from 'src/app/models/phase';
import { Project } from 'src/app/models/project.model';
import { Role } from 'src/app/models/role.model';
import { Status } from 'src/app/models/status.model';
import { Tag } from 'src/app/models/tag.model';
import { User } from 'src/app/models/user.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
 public newProject: Project = new Project(0, '',
    new Status(1, 'IN_ITERATION'), '',
    new User(1, 'william', new Role(1, 'admin')),
    [new Tag(8, 'GIT', 'This project used GIT')],
    new Phase(1, 'BACKLOG_GENERATED', 'CoE has completed the iterations backlog, awaiting trainer approval'));
  public projectName = '';
  public projectDescription = '';


  public errorDetected = false;
  constructor(public projectService: ProjectService,
              private route: Router) { }

  ngOnInit(): void {
  }

  public registerProject() {
    this.newProject.name = this.projectName;
    this.newProject.description = this.projectDescription;
    // this.newProject.tags =
    console.log(this.newProject);
    this.projectService.registerProject(this.newProject)
      .subscribe(project =>
        {
          if (project.name === this.projectName){
            this.projectService.setCurrentProject(project);
            console.log('It someone problem!');
            this.route.navigate(['/project-detail']);
            this.errorDetected = false;
          }
          else {
            this.errorDetected = true;
            const errorElement = document.getElementById('errorText');
            if (errorElement){
              errorElement.innerHTML = 'An error Occured';
            }
          }
        });
  }

}
