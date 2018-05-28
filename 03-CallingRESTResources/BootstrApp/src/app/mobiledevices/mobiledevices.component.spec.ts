import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledevicesComponent } from './mobiledevices.component';

describe('MobiledevicesComponent', () => {
  let component: MobiledevicesComponent;
  let fixture: ComponentFixture<MobiledevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
