import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClientService', () => {
  let service: ClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP GET request to the correct URL', () => {
    const expectedUrl = 'https://demo4529396.mockable.io/clients';

    service.getClients().subscribe();

    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
  });

  it('should return the data from the HTTP response', () => {
    const expectedData = [{ id: 1, name: 'Client A' }, { id: 2, name: 'Client B' }];

    service.getClients().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne('https://demo4529396.mockable.io/clients');
    req.flush(expectedData);
  });
});
