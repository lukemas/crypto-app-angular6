import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListItemComponent } from './coin-list-item.component';

describe('CoinListItemComponent', () => {
  let component: CoinListItemComponent;
  let fixture: ComponentFixture<CoinListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
