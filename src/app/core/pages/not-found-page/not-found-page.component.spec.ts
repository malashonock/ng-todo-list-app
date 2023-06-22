import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent]
    });
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const h1DebugEl = fixture.debugElement.query(By.css('h1'));
    expect(h1DebugEl.nativeElement).toMatchSnapshot();
  });
});
