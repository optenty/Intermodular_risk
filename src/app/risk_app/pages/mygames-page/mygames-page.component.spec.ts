import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygamesPageComponent } from './mygames-page.component';

describe('MygamesPageComponent', () => {
  let component: MygamesPageComponent;
  let fixture: ComponentFixture<MygamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MygamesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MygamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
