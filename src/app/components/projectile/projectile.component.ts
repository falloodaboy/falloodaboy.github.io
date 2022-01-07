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
  @ViewChild('desc') desc: ElementRef<HTMLSpanElement>;
  @ViewChild('projectile') projectile: ElementRef<HTMLDivElement>;
  @ViewChild('text') text: ElementRef<HTMLParagraphElement>;
  showdesc;
  hidedesc;
  restartanim = true;
  constructor() { }
  
  
  printHi() {
    console.log("Hi");
  }

  ngAfterViewInit(): void {
    this.projectile.nativeElement.onmouseenter = (ev) => {
        this.desc.nativeElement.style.top = "0%";
        this.desc.nativeElement.style.opacity = "1";
        this.text.nativeElement.style.opacity = "1";
    }

    this.projectile.nativeElement.onmouseleave = (ev) => {
      this.desc.nativeElement.style.top = "100%";
      this.desc.nativeElement.style.opacity = "1";
      this.text.nativeElement.style.opacity = "0";
    }
  }

  ngOnInit(): void {
  }

  openProject(event) {
      window.open(this.projectUrl);
  }

  showDesc() {
    
  }

  hideDesc() {

  }
} 


