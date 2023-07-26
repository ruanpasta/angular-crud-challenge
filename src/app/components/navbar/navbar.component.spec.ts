import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Drugovich logo with alt text and correct src', () => {
    const logoImg = fixture.nativeElement.querySelector('img');

    expect(logoImg).toBeTruthy();
    expect(logoImg.getAttribute('alt')).toBe('Drugovich logo');
    expect(logoImg.getAttribute('src')).toContain('assets/drugovich-logo.png');
  });

});
