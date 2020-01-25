import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTweetComponent } from './favorite-tweet.component';

describe('FavoriteTweetComponent', () => {
  let component: FavoriteTweetComponent;
  let fixture: ComponentFixture<FavoriteTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
