import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'mat-toolbar',
  template: '<ng-content></ng-content>',
})
class MockMatToolbarComponent { }

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MockMatToolbarComponent,
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
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
