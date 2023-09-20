import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarprodPage } from './editarprod.page';

describe('EditarprodPage', () => {
  let component: EditarprodPage;
  let fixture: ComponentFixture<EditarprodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
