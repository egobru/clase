import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  listaProy: any[] = environment.proyectos; // any, pq el array de proyectos tiene de varios tipos sus propiedades (id, name)

  constructor() { }

  ngOnInit() {
  }

}
