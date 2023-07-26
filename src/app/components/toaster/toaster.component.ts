import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  notifications: any[] = [];
  currentType: 'success' | 'info' | 'danger' = 'success'

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
    this.toasterService.registerToaster(this);
  }

  showNotification(message: string, type: 'success' | 'info' | 'danger' = 'success') {
    this.currentType = type
    this.notifications.push({ message });
    setTimeout(() => this.notifications.shift(), 5000);
  }
}
