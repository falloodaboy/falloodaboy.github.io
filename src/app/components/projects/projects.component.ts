export interface projectile {
    title: string,
    desc: string,
    snap: string,
    purl: string
};


import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/mail/toast.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  public projects:projectile[] = [
    {
      title: "BackTrackSolver",
      desc: "Solves a crossword puzzle recursively using a back-tracking algorithm to find and highlight every word found in the phrase.",
      snap: "assets/projectsnapshots/backtracksolver.png",
      purl: "https://github.com/falloodaboy/Projects/tree/main/BackTrackSolver"
    },

    {
      title: "BubbleSim",
      desc: "Bubble shooter game created in MIPS assembly language using the Mars emulator.",
      snap: "assets/projectsnapshots/bubblesim.png",
      purl:  "https://github.com/falloodaboy/Projects/tree/main/BubbleSim"
    },
    {
      title: "Car Sales Optimizer",
      desc: "Min Heap implementation to simulate finding the best car given what aspects the customer is looking for.",
      snap: "assets/projectsnapshots/HeapImp.png",
      purl: "https://github.com/falloodaboy/Projects/tree/main/HeapImp"
    },
    // {
    //   title: "Hefty Integer",
    //   desc: "Custom implementation of Big Integer in Java using bit manipulation",
    //   snap: "assets/projectsnapshots/test.jpg",
    //   purl: "https://github.com/falloodaboy/Projects/tree/main/HeftyInteger"
    // },
    // {
    //   title: "LZW Compression Algorithm",
    //   desc: "Implementation of the LZW compression algorithm for files written in Java",
    //   snap: "assets/projectsnapshots/test.jpg",
    //   purl: "https://github.com/falloodaboy/Projects/tree/main/LZWComp"
    // },
    {
      title: "Roulette Simulation",
      desc: "Roulette game written in Java as practice with Java Threads.",
      snap: "assets/projectsnapshots/RouletteSim.png",
      purl: "https://github.com/falloodaboy/Projects/tree/main/RouletteSim"
    },
    // {
    //   title: "Museum Tourguide",
    //   desc: "Application written to simulate process synchronization using the analogy of tourguides in a museum synchronizing together",
    //   snap: "assets/projectsnapshots/test.jpg",
    //   purl: "https://github.com/falloodaboy/Projects/tree/main/SynchProblemImp"
    // },
    
    {
      title: "Big Data Application",
      desc: "Micro-service based cloud application written in JavaScript and deployed to GCP Kubernetes Engine to provide a big data processing workspace. Microservices that are provided in the application: Jupyter Notebook, Sonarqube, Hadoop HDFS and MapReduce, and Apache Spark",
      snap: "assets/projectsnapshots/bdp.png",
      purl: "https://github.com/falloodaboy/Docker/tree/master/CourseProject"
    }
  ]
  private calc = Math.floor(this.projects.length / 2);
  public cols =  this.calc >= 5 ? this.calc : 5;
  // this.calc >= 6 ? this.calc : 6
  constructor(
    private toasts: ToastService,
    private bpobserver: BreakpointObserver
    ) { }

  ngOnInit(): void {
      this.toasts.toasts = [];
      const bpobservable = this.bpobserver.observe([
        '(min-width: 1040px)',
        '(min-width: 771px) and (max-width: 1040px)',
        '(min-width: 481px) and (max-width: 771px)',
        '(min-width: 321px) and (max-width: 481px)'
      ]);

      bpobservable.subscribe((next) => {
          //console.log(next);
          if(next.breakpoints["(min-width: 1040px)"]) {
            this.cols = 5;
          }
          else if(next.breakpoints["(min-width: 771px) and (max-width: 1040px)"]) {
            this.cols = 3;
          }
          else if(next.breakpoints["(min-width: 481px) and (max-width: 771px)"]) {
            this.cols = 2;
          }
          else if(next.breakpoints["(min-width: 321px) and (max-width: 481px)"]) {
            this.cols = 1;
          } 
      });
  }

}

