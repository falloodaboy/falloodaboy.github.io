import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Glide from '@glidejs/glide';
import { Splide } from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
   splide;
   glide;
   @ViewChild('SliderContainer') slider_container: ElementRef<HTMLDivElement>;

  constructor() {
   }
  ngAfterViewInit(): void {
    console.log(this.slider_container.nativeElement);
    this.splide =  new Splide('.splide', {
      height: this.slider_container.nativeElement.clientHeight - 35 + "px",
      direction: 'ttb',
      gap: '1em',
      drag: false,
      pagination: false
    }).mount();

   this.glide = new Glide('.glide', {
      type: 'carousel'
    }).mount();

  }

  ngOnInit(): void {


  }

}
