import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to Home with redirecting "/" page', () => {
    const homeLink = fixture.debugElement.query(By.css('a[routerLink="/"]'));
    expect(homeLink).toBeTruthy(); 
    expect(homeLink.nativeElement.textContent).toContain('Home');
  });

  it('should have a link to Units with redirecting "/units" page', () => {
    const unitsLink = fixture.debugElement.query(By.css('a[routerLink="/units"]'));
    expect(unitsLink).toBeTruthy(); 
    expect(unitsLink.nativeElement.textContent).toContain('Units');
  });
});
