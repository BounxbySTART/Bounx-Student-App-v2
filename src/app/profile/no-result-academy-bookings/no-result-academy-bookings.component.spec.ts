import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoResultAcademyBookingsComponent } from './no-result-academy-bookings.component';

describe('NoResultAcademyBookingsComponent', () => {
  let component: NoResultAcademyBookingsComponent;
  let fixture: ComponentFixture<NoResultAcademyBookingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultAcademyBookingsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoResultAcademyBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
