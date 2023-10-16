import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDialogComponent } from './resultado-dialog.component';

describe('ResultadoDialogComponent', () => {
  let component: ResultadoDialogComponent;
  let fixture: ComponentFixture<ResultadoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoDialogComponent]
    });
    fixture = TestBed.createComponent(ResultadoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
