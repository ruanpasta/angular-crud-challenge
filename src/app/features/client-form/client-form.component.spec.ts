import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponent } from './client-form.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { clientReducer } from 'src/app/store/client.reducer';
import { ActivatedRoute, convertToParamMap, ParamMap, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(() => {
    const testParams: Params = { id: '1' };
    const paramMap = new BehaviorSubject<ParamMap>(convertToParamMap(testParams));
    TestBed.configureTestingModule({
      imports: [ClientFormComponent, NavbarComponent, StoreModule.forRoot({ client: clientReducer })],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap
        }
      }]
    });
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Novo cliente" in app-page-header', () => {
    const pageHeaderElement = fixture.nativeElement.querySelector('app-page-header');
    expect(pageHeaderElement).toBeTruthy();

    const titleAttribute = pageHeaderElement.getAttribute('title');
    expect(titleAttribute).toBe('Novo cliente');
  });

  it('should render the icon in app-page-header', () => {
    const iconElement = fixture.nativeElement.querySelector('app-page-header i[previousSlot]');
    expect(iconElement).toBeTruthy();
  });

  it('should render the form fields and error messages', () => {
    const nameInputElement = fixture.nativeElement.querySelector('input#name');
    const cnpjInputElement = fixture.nativeElement.querySelector('input#cnpj');
    const statusSelectElement = fixture.nativeElement.querySelector('select#status');

    expect(nameInputElement).toBeTruthy();
    expect(cnpjInputElement).toBeTruthy();
    expect(statusSelectElement).toBeTruthy();

    component.companyForm.get('name')?.markAsDirty();
    component.companyForm.get('cnpj')?.markAsDirty();
    component.companyForm.get('status')?.markAsDirty();

    fixture.detectChanges();

    const inputs =  fixture.nativeElement.querySelectorAll('.form-container__input');
    const nameErrorMessage = inputs[0];
    const cnpjErrorMessage = inputs[1];
    const statusErrorMessage = inputs[2];

    expect(nameErrorMessage.textContent).toContain('Campo obrigatório.');
    expect(cnpjErrorMessage.textContent).toContain('Campo obrigatório.');
    expect(statusErrorMessage.textContent).toContain('Campo obrigatório.');
  });

  it('should render the "Cancelar" and "Salvar" buttons', () => {
    const cancelButtonElement = fixture.nativeElement.querySelector('.form-container__buttons app-button[variation="link"]');
    const saveButtonElement = fixture.nativeElement.querySelector('.form-container__buttons app-button[variation="secondary"]');

    expect(cancelButtonElement).toBeTruthy();
    expect(saveButtonElement).toBeTruthy();
  });
});
