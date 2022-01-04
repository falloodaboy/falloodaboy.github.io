import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-projectile',
  templateUrl: './projectile.component.html',
  styleUrls: ['./projectile.component.scss']
})
export class ProjectileComponent implements OnInit, AfterViewInit{
  
  @Input() projectUrl:string;
  @Input() description:string;
  @Input() snapshotUrl:string;
  @Input() title:string;

  showdesc;
  hidedesc;
  constructor() { }
  
  
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

  public openProject(event) {
      window.open(this.projectUrl);
  }

  public showDesc() {
    this.hidedesc = undefined;
    if(this.showdesc == undefined) {
      this.showdesc = anime({
        targets: '.projectile-desc',
        top: '0%',
        duration: 200,
        easing: 'easeInSine'
      });
    }
    
  }

  public hideDesc() {
    this.showdesc = undefined;
    if(this.hidedesc == undefined) {
      this.hidedesc = anime({
        targets: '.projectile-desc',
        top: '100%',
        duration: 200,
        easing: 'easeOutSine'
      });
    }
    
  }
} 


