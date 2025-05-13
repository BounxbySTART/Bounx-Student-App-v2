import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademyProfileBranchDeteComponent } from './academy-profile-branch-dete.component';

describe('AcademyProfileBranchDeteComponent', () => {
  let component: AcademyProfileBranchDeteComponent;
  let fixture: ComponentFixture<AcademyProfileBranchDeteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyProfileBranchDeteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademyProfileBranchDeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
