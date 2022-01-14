import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import Glide from '@glidejs/glide';
import { Splide } from '@splidejs/splide';
import { Container, tsParticles } from 'tsparticles';
import { NgParticlesComponent } from 'ng-particles';
import anime from 'animejs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/mail/toast.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
   splide;
   glide;
   splide2;
   particlesOptions;
   textinfo: string =
       "Thanks for dropping by! My name is Zohaib Wasim. I am a student at the University of Pittsburgh pursuing a bachelor's in Computer Science. I am a passionate software developer who enjoys cracking tough problems with code and working with like-minded people to develop new software technologies. I've also had the chance to put my passion to work as a software developer working for PPG and JumpStart through internships. I am always looking for new opportunities and always happy to meet new people. If you are interested in working with me, feel free to reach out using the contact form!"
   ;
   id = "Particles"
   @ViewChild('SliderContainer') slider_container: ElementRef<HTMLDivElement>;
   @ViewChild('WelcomeContainer') welcome_container: ElementRef<HTMLHeadingElement>;
   @ViewChild('meatContainer') meatContainer: ElementRef<HTMLDivElement>;
   @ViewChild('personwrapper') personwrapper: ElementRef<HTMLDivElement>;

  constructor(
      private location: Location,
      private activeroute: ActivatedRoute,
      private toasts: ToastService
  ) {

   }
  
  

 

  ngAfterViewInit(): void {
    this.activeroute.url.subscribe((next) => {
        if(next.toString() == "") {
            
            this.splide =  new Splide('.splide', {
                height: 'calc(100vh - 35px)',
                direction: 'ttb',
                gap: '1em',
                drag: false,
                pagination: false,
                wheel: true
              }).mount();

           

            this.splide2 =  new Splide('.splide2', {
                height: 'calc(100vh - 35px)',
                type: 'loop',
                direction: 'ltr',
                gap: '1em',
                drag: false,
                pagination: false
            }).mount();

            this.splide.on('move', () => {
                this.splide2.go('+1');
            });
        }
    });
   let headwrapper = this.welcome_container.nativeElement;
   headwrapper.innerHTML = headwrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    let anim1 = anime({
        targets: ' .home-info-social',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 700,
        easing: "easeInOutSine",
        delay: 100,
        autoplay: false
    });

    let welcomsign = anime.timeline({loop: false, autoplay: false})
        .add({
            targets: ' .home-info-portrait',
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 700,
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
            duration: 1000,
            delay: (el, i) => 70*i,
            autoplay: false
        }, '-= 600')
        .add({
            targets: '.home-info-meat',
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 500,
            easing: "easeInOutSine",
            delay: 100,
            autoplay: false
        }, '-= 500')
        .add({
            targets: '.home-projectScroll',
            opacity: [0, 1],
            duration: 500,
            easing: "easeInOutSine",
            delay: 100,
            autoplay: false
        })
        .add({
            targets: '.home-info-canvas',
            opacity: [0,1],
            duration: 500,
            easing: "easeInExpo",
            delay: 100,
            autoplay: false
        });

        anim1.play();
        welcomsign.play();    

  }

  ngOnInit(): void {
    this.particlesOptions = {
      background: {
        color: {
            value: "#10002B"
        }
    },
    fpsLimit: 30,
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
        },

      
    },
    detectRetina: true
    };
    
    this.toasts.toasts = [];
 }

 particlesLoaded(container: Container): void {
    
}
 openLink(event) {
     console.log(event);
     if(event.target.src == "https://falloodaboy.github.io/assets/images/github.png") {
         window.open("https://github.com/falloodaboy/Projects");
     }
     else if(event.target.src == "https://falloodaboy.github.io/assets/images/test.png") {
        window.open("https://www.linkedin.com/in/zohaib-wasim/");
     }
 }
}
