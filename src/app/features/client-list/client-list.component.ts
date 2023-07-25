import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {

}
