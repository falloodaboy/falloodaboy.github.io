import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/mail/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './apptoasts.component.html',
  styleUrls: ['./apptoasts.component.scss']
})
export class ApptoastsComponent implements OnInit {

  constructor(
    public toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

}
