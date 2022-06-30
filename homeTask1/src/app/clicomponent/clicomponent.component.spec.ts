import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicomponentComponent } from './clicomponent.component';

describe('ClicomponentComponent', () => {
  let component: ClicomponentComponent;
  let fixture: ComponentFixture<ClicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
