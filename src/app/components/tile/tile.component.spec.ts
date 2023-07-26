import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import { Status } from 'src/app/core/types/status.enum';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TileComponent]
    });
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name', () => {
    const name = 'Auto-Pecas Joaquim LTDA.'
    component.name = name
    fixture.detectChanges()

    const tileElement = fixture.nativeElement.querySelector('.container')
    expect(tileElement.textContent).toContain(name)
  })

  it('should have cnpj', () => {
    const cnpj = 'Auto-Pecas Joaquim LTDA.'
    component.cnpj = cnpj
    fixture.detectChanges()

    const tileElement = fixture.nativeElement.querySelector('.container')
    expect(tileElement.textContent).toContain(cnpj)
  })

  it('should have status', () => {
    const status = Status.Ativo
    component.status = status
    fixture.detectChanges()

    const tileElement = fixture.nativeElement.querySelector('.container')
    expect(tileElement.textContent).toContain(status)
  })

  it('should have button', () => {
    const buttonElement = fixture.nativeElement.querySelector('button')
    expect(buttonElement).toBeTruthy()
  })
});
