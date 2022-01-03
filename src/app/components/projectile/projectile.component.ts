import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectile',
  templateUrl: './projectile.component.html',
  styleUrls: ['./projectile.component.scss']
})
export class ProjectileComponent implements OnInit {
  
  @Input() projectUrl:string;
  @Input() description:string;
  @Input() snapshotUrl:string;
  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

  public openProject(event) {
      window.open(this.projectUrl);
  }
} 
