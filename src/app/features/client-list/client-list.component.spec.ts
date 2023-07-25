import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientListComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
