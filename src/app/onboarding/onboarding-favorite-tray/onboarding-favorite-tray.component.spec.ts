import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingFavoriteTrayComponent } from './onboarding-favorite-tray.component';

describe('OnboardingFavoriteTrayComponent', () => {
  let component: OnboardingFavoriteTrayComponent;
  let fixture: ComponentFixture<OnboardingFavoriteTrayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingFavoriteTrayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingFavoriteTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
