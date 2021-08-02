import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/service/project.service';
import { Project } from 'src/app/models/project.model';
import { ViewProjectService } from './../../service/view-project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iteration } from '../../models/iteration.model';

import { Status } from 'src/app/models/status.model';
import { User } from 'src/app/models/user.model';
import { Role } from 'src/app/models/role.model';
import { BatchTemplate } from 'src/app/models/batch.model';

import { IterationService } from 'src/app/service/iteration.service';
import { Phase } from 'src/app/models/phase';
import { PhaseService } from 'src/app/service/phase.service';
import { ViewProjectsComponent } from '../view-projects/view-projects.component';
import { Location } from '@angular/common';
import {Tag} from "../../models/tag.model"
import { ProjectTagManagementService } from 'src/app/service/project-tag-management.service';





@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})




export class ProjectDetailComponent implements OnInit {

   arr!:Tag[];

  constructor(
              public data: ProjectTagManagementService,
              private viewProjectService:ViewProjectService,
              private projectService:ProjectService,

              private router:ActivatedRoute,
              private route: Router,
              private location: Location,
              private phaseService: PhaseService) { }


  //In future link to status table?
  public statusMap:Record<string, number>={
    IN_ITERATION:1,
    CODE_FREEZE:2,
    CODE_REVIEW:3,
    NEEDS_CLEANUP:4,
    READY_FOR_ITERATION:5,
    ACTIVE:6,
    NEEDS_ATTENTION:7,
    ARCHIVED:8,
  };


  public statuses = ['ACTIVE', 'NEEDS_ATTENTION', 'ARCHIVED', 'CODE_REVIEW'];
  public phases = ['BACKLOG_GENERATED', 'TRAINER_APPROVED', 'HANDOFF_SCHEDULED', 'RESOURCE_ALLOCATION', 'CHECKPOINT_MEETING', 'CODE_REVIEW','COMPLETE']



  //Temporary model

  model = new Project(1, "name", new Status(1, "name"), "sample desc", new User(1, "username", new Role(1, "string")), [], new Phase(1, "BACKLOG_GENERATED", "CoE has completed the iterations backlog, awaiting trainer approval"));

  submitted = false;

  onSubmit() { this.submitted = true; }

  sendBatch ?: BatchTemplate;
  iteration?: Iteration ;
  tempIteration?: Iteration ;

  changeBatch(value:BatchTemplate){
    this.sendBatch = value;
    console.log(this.sendBatch);
  }
  public desiredId:number=1 
  public projects?:Project[]=[]

  public project?:Project;

  ngOnInit(): void {

    this.data.currentTagArray.subscribe(arr => this.arr = arr);

    this.phaseService.getPhases();
    this.project = this.projectService.getCurrentProject();
    if(this.project.id==0){
      this.route.navigate([''])
    }
  }

  //Update Project in the backend
  public submit():void{
    if (!this.project){ return }

    if (this.sendBatch){
      this.iteration = new Iteration(this.sendBatch.batchId, this.project, this.sendBatch.id, this.sendBatch.startDate, this.sendBatch.endDate);
    }

    //Setting the status id
    this.project.status.id=this.statusMap[this.project.status.name];

    if(this.project != undefined){
      let phaseFound = this.phaseService.phases.find(p=>{
        if(this.project){
          return p.kind==this.project.phase.kind
        }
        else {
          return false
        }
      });
      if(phaseFound!=undefined)
        this.project.phase = phaseFound;
    }
    this.project.tags = this.arr;

    this.projectService.updateProject(this.project).subscribe((data)=>{
      this.project=data;
      this.route.navigate(['viewProject']);
    });
  }

  goBack():void {
    this.location.back()
  }

}
