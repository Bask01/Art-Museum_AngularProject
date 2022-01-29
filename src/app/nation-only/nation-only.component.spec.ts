import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationOnlyComponent } from './nation-only.component';

describe('NationOnlyComponent', () => {
  let component: NationOnlyComponent;
  let fixture: ComponentFixture<NationOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
