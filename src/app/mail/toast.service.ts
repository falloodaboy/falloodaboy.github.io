import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];
  constructor() {}


  show(body: string, options: any = {}) {
      this.toasts.push({body, ...options});
  }

  remove(toast) {
      this.toasts = this.toasts.filter(t => t != toast);
  }
}
