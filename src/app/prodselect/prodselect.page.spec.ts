import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdselectPage } from './prodselect.page';

describe('ProdselectPage', () => {
  let component: ProdselectPage;
  let fixture: ComponentFixture<ProdselectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
