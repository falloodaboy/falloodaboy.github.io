import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/mail/toast.service';
import { ContactmodalcontentComponent } from '../contactmodalcontent/contactmodalcontent.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private modelref;
  constructor(
    private ngb: NgbModal,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  
  OpenModal() {
   this.modelref = this.ngb.open(ContactmodalcontentComponent, {
     windowClass: 'modal-yeet',
     size: 'yeet',
     backdrop: 'static',
     centered: true
   }).result.then((result) => {
        if(result == "CANCELLED") {
            this.toastService.show("Contact was cancelled", {
                classname: "bg-info text-light",
                delay: 2000
            });
        }
        else if(result == "SUCCESS") {
          this.toastService.show("Email Sent! Thank you for your business!", {
            classname: "bg-success text-light",
            delay: 2000
          });
        }
        else if(result == "FAILURE") {
          this.toastService.show("Email couldn't be sent. Please try again later or reach out to zohaib.wasim@gmail.com", {
            classname: "bg-danger text-light",
            delay: 2000
          });
        }
   });
  }

}
