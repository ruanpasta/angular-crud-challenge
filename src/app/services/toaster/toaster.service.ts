import { Injectable } from '@angular/core';
import { ToasterComponent } from 'src/app/components/toaster/toaster.component';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toaster: ToasterComponent | undefined;

  registerToaster(toaster: ToasterComponent) {
    this.toaster = toaster;
  }

  showNotification(message: string, type: 'success' | 'info' | 'danger' = 'success') {
    if (this.toaster) {
      this.toaster.showNotification(message, type);
    }
  }
}
