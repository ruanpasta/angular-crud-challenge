import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { clientReducer } from 'src/app/store/client.reducer';
import { of } from 'rxjs';
import Client from 'src/app/core/entities/Client';
import { Status } from 'src/app/core/types/status.enum';
import { ClientService } from 'src/app/services/client/client.service';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;
  let service: ClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientListComponent, NavbarComponent, HttpClientTestingModule, StoreModule.forRoot({ client: clientReducer })],
      providers: [ClientService]
    });
    service = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController)
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "Listagem de Clientes" in app-page-header', () => {
    const pageHeaderElement = fixture.nativeElement.querySelector('app-page-header');
    expect(pageHeaderElement).toBeTruthy();

    const titleAttribute = pageHeaderElement.getAttribute('title');
    expect(titleAttribute).toBe('Listagem de Clientes');
  });

  it('should render the "Novo" button in app-page-header', () => {
    const novoButtonElement = fixture.nativeElement.querySelector('app-page-header app-button[afterSlot]');
    expect(novoButtonElement).toBeTruthy();

    const labelAttribute = novoButtonElement.getAttribute('label');
    expect(labelAttribute).toBe('Novo');

    const variationAttribute = novoButtonElement.getAttribute('variation');
    expect(variationAttribute).toBe('primary');

    const iconAttribute = novoButtonElement.getAttribute('icon');
    expect(iconAttribute).toBe('fa-solid fa-plus');
  });

  it('should render the main with class "tiles-container" and tiles for each client', () => {
    const mainElement = fixture.nativeElement.querySelector('main.tiles-container');
    expect(mainElement).toBeTruthy();

    const mockClients = [
      new Client('Client1', '123', Status.Ativo ),
      new Client('Client2', '456', Status.Inativo ),
    ];

    component.clients$ = of(mockClients);

    fixture.detectChanges();

    const tileElements = fixture.nativeElement.querySelectorAll('app-tile');
    expect(tileElements.length).toBe(mockClients.length);

    const firstTileElement = tileElements[0];
    expect(firstTileElement.textContent).toContain('Client1');
    expect(firstTileElement.textContent).toContain('123');
    expect(firstTileElement.textContent).toContain('Ativo');
  });

  it('should render the div with class "pager" and show the correct message', () => {
    const pagerElement = fixture.nativeElement.querySelector('div.pager');
    expect(pagerElement).toBeTruthy();

    const mockClientsLength = of(10);
    component.clientsLength$ = mockClientsLength;

    fixture.detectChanges();

    expect(pagerElement.textContent.trim()).toBe('Exibindo 10 de 10 clientes');
  });

});
