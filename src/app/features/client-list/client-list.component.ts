import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import Client from 'src/app/core/entities/Client';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addClient, changeClientLoad, deleteClient } from 'src/app/store/client/client.actions';
import { ClientState } from 'src/app/store/client/client.state';
import { map } from 'rxjs';
import { ClientService } from 'src/app/services/client/client.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients$: Observable<Client[]>;
  clientsLength$: Observable<number>;
  clientsLoaded$: Observable<boolean | undefined>
  isLoaded: boolean | undefined = false

  constructor(
    private clientService: ClientService,
    private router: Router,
    private store: Store<{ client: ClientState }>,
    private toasterService: ToasterService
  ) {
    this.clients$ = this.store.select('client').pipe(map((c) => c.clients));
    this.clientsLength$ = this.store
      .select('client')
      .pipe(map((c) => c.clients.length));
    this.clientsLoaded$ = this.store.select('client').pipe(map(c => c.isLoaded))
  }

  ngOnInit(): void {
    this.clientsLoaded$.subscribe(isLoaded => this.isLoaded = isLoaded)
    this.clientsLength$.subscribe(length => {
      if (length === 0 && !this.isLoaded) {
        this.store.dispatch(changeClientLoad({ isLoaded: true }))
        return this.getClientsFromApi()
      }
    })
  }

  handleClientEditClick(client?: Client) {
    const path = client ? client.getId() : 'new';
    this.router.navigate([`/client/${path}`]);
    console.log('Edit:')
  }

  handleClientRemoveClick(client?: Client) {
    this.store.dispatch(deleteClient({ clientId: client!.getId() }))
  }

  private getClientsFromApi(): void {
    this.clientService.getClients().subscribe((response) => {
      if (response.length) {
        this.toasterService.showNotification('Lista de clientes atualizada');
        for (const c of response) {
          const newClient = new Client(c.name, c.cnpj, c.status);
          this.store.dispatch(addClient({ client: newClient }));
        }
      }
    }, () => {
      this.toasterService.showNotification('Nao foi possivel carregar os Clientes', 'danger');
    });
  }
}
