import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuImageComponent } from './menu-image.component';

describe('MenuImageComponent', () => {
  let component: MenuImageComponent;
  let fixture: ComponentFixture<MenuImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
