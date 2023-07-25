import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageHeaderComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const title = 'My Page';
    component.title = title;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.container__info__title');
    expect(titleElement.textContent).toContain(title);
  });

  it('should render the icon and button', () => {
    const title = 'My Page';

    // Create Icon and Button to use in ngContents
    const iconElement = document.createElement('i');
    iconElement.setAttribute('icon', ''); // Add Icon Attribute
    const buttonElement = document.createElement('button');
    buttonElement.setAttribute('button', ''); // Add Button attribute

    // Update PageHeader element with properties and contents
    component.title = title;
    const container = fixture.nativeElement.querySelector('.container') as HTMLElement;
    container.appendChild(buttonElement)
    const containerInfo = fixture.nativeElement.querySelector('.container__info')  as HTMLElement;
    containerInfo.appendChild(iconElement)
    fixture.detectChanges();

    expect(containerInfo.contains(iconElement)).toBeTruthy();
    expect(containerInfo.textContent).toContain(title);
    expect(container.contains(buttonElement)).toBeTruthy();
  });

  it('should render the separator element', () => {
    const separator = fixture.nativeElement.querySelector('.separator') as HTMLElement;
    expect(separator).toBeTruthy()
  })
});
