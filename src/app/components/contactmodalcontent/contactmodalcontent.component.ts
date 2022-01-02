import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactmodalcontent',
  templateUrl: './contactmodalcontent.component.html',
  styleUrls: ['./contactmodalcontent.component.scss']
})
export class ContactmodalcontentComponent implements OnInit {

   formGroup: FormGroup;

  constructor(
    public ngbactive: NgbActiveModal
    ) { 

    }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
        name: new FormControl(),
        email: new FormControl('yourid@host.com'),
        message: new FormControl('your message here...'),
        company: new FormControl()
    });
  }

  onSubmit() {
      console.log(this.formGroup);
      //send email here
  }

}
