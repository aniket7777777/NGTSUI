import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuiComponent } from './tsui.component';

describe('TsuiComponent', () => {
  let component: TsuiComponent;
  let fixture: ComponentFixture<TsuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
