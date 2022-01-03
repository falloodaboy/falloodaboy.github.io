import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public cols = 3
  public title = "This Is a Tile";
  public desc = "This is a description";
  public snap = "assets/projectsnapshots/test.jpg";
  public purl = "https://github.com/falloodaboy/Projects/tree/main/HeapImp";

  constructor() { }

  ngOnInit(): void {
      
  }

}
