import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademyBookingsFilterComponent } from './academy-bookings-filter.component';

describe('AcademyBookingsFilterComponent', () => {
  let component: AcademyBookingsFilterComponent;
  let fixture: ComponentFixture<AcademyBookingsFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyBookingsFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademyBookingsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
