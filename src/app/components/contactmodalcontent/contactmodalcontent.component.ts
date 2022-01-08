import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactmodalcontent',
  templateUrl: './contactmodalcontent.component.html',
  styleUrls: ['./contactmodalcontent.component.scss']
})
export class ContactmodalcontentComponent implements OnInit {

   formGroup: FormGroup;
   private transporter;
  constructor(
    public ngbactive: NgbActiveModal,
    private http: HttpClient
    ) { 
    }

  ngOnInit(): void {
    emailjs.init("user_7n9gStOKNGDfwqzyoG8ZN");
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
      let tempParams = {
        from_name: this.formGroup.get('name').value as string,
        from_email: this.formGroup.get('email').value as string,
        message: this.formGroup.get('message').value as string,
        from_company: this.formGroup.get('company').value as string
      }
      // emailjs.send("contact_service","contact_form",{
      //   from_name: "John Doe",
      //   from_company: "Acme Corp",
      //   message: "This is a test",
      //   from_email: "john.doe@gmail.com",
      //   });
      emailjs.send('contact_service', 'contact_form', tempParams)
      .then((response) => {
          this.ngbactive.close('SUCCESS');
      })
      .catch((err) => {
          this.ngbactive.close('FAILURE');
      });
  }

}
