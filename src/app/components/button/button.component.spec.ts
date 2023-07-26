import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label inside the button', () => {
    const label = 'Teste button';
    component.label = label;
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.container');
    expect(buttonElement.textContent).toContain(label);
  });

  it('should render the icon when icon property is set', () => {
    const iconName = 'fa fa-check';
    component.icon = iconName;
    fixture.detectChanges();

    const iconElement: HTMLElement = fixture.nativeElement.querySelector('i');
    expect(iconElement).toBeTruthy();
    expect(iconElement.className).toContain(iconName);
  });

  it('should emit the click event when the button is clicked', () => {
    spyOn(component.onClick, 'emit');

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.container');
    buttonElement.click();

    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should pass the $event object when the button is clicked', () => {
    spyOn(component.onClick, 'emit');

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.container');
    buttonElement.click();

    expect(component.onClick.emit).toHaveBeenCalledWith(jasmine.any(Object));
  });

  it('should have the primary class', () => {
    const variation = 'primary';
    component.variation = variation;
    fixture.detectChanges();

    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('.container');

    expect(buttonElement.className).toContain(variation);
  });

  it('should disable the button when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTrue();
  });
});
