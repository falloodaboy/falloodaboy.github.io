import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Glide from '@glidejs/glide';
import { Splide } from '@splidejs/splide';
import { tsParticles } from 'tsparticles';
import { NgParticlesComponent } from 'ng-particles';
import anime from 'animejs';
import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
   splide;
   glide;
   particlesOptions;
   textinfo: string =
       "Hello, my name is Zohaib Wasim. I am a student at the University of Pittsburgh pursuing a bachelor's in Computer Science. I have completed multiple internships with PPG."
   ;
   id = "Particles"
   @ViewChild('SliderContainer') slider_container: ElementRef<HTMLDivElement>;
   @ViewChild('WelcomeContainer') welcome_container: ElementRef<HTMLHeadingElement>;

  constructor() {

   }
  ngAfterViewInit(): void {
    this.splide =  new Splide('.splide', {
      height: this.slider_container.nativeElement.clientHeight + 'px',
      direction: 'ttb',
      gap: '1em',
      drag: false,
      pagination: false,
      wheel: true
    }).mount();

   this.glide = new Glide('.glide', {
      type: 'carousel',
    }).mount();
    
    let headwrapper = this.welcome_container.nativeElement;
    headwrapper.innerHTML = headwrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let anim1 = anime({
        targets: ' .home-info-social',
        opacity: [0, 1],
        translateX: [1000,1150],
        duration: 1500,
        easing: "easeInOutSine",
        delay: 100,
        autoplay: false
    });

    let anim2 = anime({
        targets: ' .home-info-portrait',
        opacity: [0, 1],
        translateX: [800,1000],
        duration: 1500,
        easing: "easeInOutSine",
        delay: 100,
        autoplay: false
    });


    let welcomsign = anime.timeline({loop: false, autoplay: false})
        .add({
            targets: ' .home-info-portrait',
            opacity: [0, 1],
            translateX: [800,1000],
            duration: 1500,
            easing: "easeInOutSine",
            delay: 100,
            autoplay: false
        })
        .add({
            targets: '.home-info-welcome .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 1500,
            delay: (el, i) => 70*i,
            autoplay: false
        }, '-= 1100')
        .add({
            targets: '.anime-container',
            opacity: [0, 1],
            translateX: [0, 50],
            duration: 500,
            easing: "easeInOutSine",
            delay: 100,
            autoplay: false
        }, '-= 1000')
        .add({
            targets: '.home-projectScroll',
            opacity: [0, 1],
            duration: 500,
            easing: "easeInOutSine",
            delay: 100,
            autoplay: false
        });
   
        window.onload = (ev) => {
           
            anim1.play();
           // anim2.play();
            welcomsign.play();
            
        }

  }

  ngOnInit(): void {
    this.particlesOptions = {
      background: {
        color: {
            value: "#10002B"
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push"
            },
            onHover: {
                enable: false,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 1
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 30
        },
        opacity: {
            value: 1
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 3
        }
    },
    detectRetina: true
    };
    
   
 }

 openLink(event) {
     console.log(event);
     if(event.target.src == "http://localhost:9000/assets/images/github.png") {
         window.open("https://github.com/falloodaboy/Projects");
     }
     else if(event.target.src == "http://localhost:9000/assets/images/test.png") {
        window.open("https://www.linkedin.com/in/zohaib-wasim/");
     }
 }
}
