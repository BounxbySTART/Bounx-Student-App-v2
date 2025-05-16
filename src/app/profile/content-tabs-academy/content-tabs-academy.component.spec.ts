import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentTabsAcademyComponent } from './content-tabs-academy.component';

describe('ContentTabsAcademyComponent', () => {
  let component: ContentTabsAcademyComponent;
  let fixture: ComponentFixture<ContentTabsAcademyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabsAcademyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentTabsAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
