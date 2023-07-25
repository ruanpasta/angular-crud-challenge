import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponent } from './client-form.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientFormComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
