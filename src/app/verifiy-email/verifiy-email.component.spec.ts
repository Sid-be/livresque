import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiyEmailComponent } from './verifiy-email.component';

describe('VerifiyEmailComponent', () => {
  let component: VerifiyEmailComponent;
  let fixture: ComponentFixture<VerifiyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiyEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
