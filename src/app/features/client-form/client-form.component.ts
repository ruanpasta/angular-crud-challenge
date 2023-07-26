import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import Client from 'src/app/core/entities/Client';
import { Store, select } from '@ngrx/store';
import { ClientState } from 'src/app/store/client.state';
import { addClient, updateClient } from 'src/app/store/client.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent {
  companyForm!: FormGroup;
  client!: Client | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ client: ClientState }>,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService
  ) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      status: ['', Validators.required],
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.store.pipe(select('client')).subscribe(response => this.client = response.clients.find(c => c.getId() === id))

          if (this.client) {
            this.companyForm.patchValue(this.client);
            this.markFormGroupAsTouched(this.companyForm)
          }

          if (!this.client && id !== 'new') {
            this.toasterService.showNotification('Nenhum cliente com este Id foi encontrado', 'danger');
          }
      }

    });
  }

  updateOrAddClient(formValue: any, type: 'update' | 'add'): void {
    const newClient = new Client(
      formValue.name,
      formValue.cnpj,
      formValue.status
    );

    if (type === 'add') this.store.dispatch(addClient({ client: newClient }));
    else this.store.dispatch(updateClient({ updatedClient: newClient, oldClient: this.client! }));
  }

  onSubmit() {
    if (this.companyForm.valid) {
      if (!this.client) this.updateOrAddClient(this.companyForm.value, 'add');
      else this.updateOrAddClient(this.companyForm.value, 'update')
      this.toasterService.showNotification('Client Salvo');
      this.companyForm.reset();
      this.router.navigate(['client']);
    }
  }

  goBack() {
    this.router.navigate(['/client'])
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
}
