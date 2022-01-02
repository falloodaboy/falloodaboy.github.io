import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactmodalcontentComponent } from '../contactmodalcontent/contactmodalcontent.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private modelref;
  constructor(
    private ngb: NgbModal
  ) { }

  ngOnInit(): void {
  }

  
  OpenModal() {
   this.modelref = this.ngb.open(ContactmodalcontentComponent, {
     size: 'lg',
     backdrop: 'static',
     centered: true
   });
  }

}
