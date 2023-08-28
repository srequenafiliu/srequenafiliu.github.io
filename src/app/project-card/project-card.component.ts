import { Component, Input, AfterViewInit } from '@angular/core';
import { IProject } from '../interfaces/i-project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements AfterViewInit {
  @Input() titulo!:string;
  @Input() project!:IProject;

  ngAfterViewInit(): void {
    if (this.project.modal) {
      for (const modal of this.project.modal){
        const button = document.getElementById("button"+this.project.titulo+modal.button);
        button?.setAttribute("data-bs-target", `#${this.project.titulo}${modal.button}`);
        button?.append(modal.button ? `Probar código (${modal.button})`: "Probar código");
      }
    }
  }

  goToLink = (url: string) => window.open(url, "_blank");
}
