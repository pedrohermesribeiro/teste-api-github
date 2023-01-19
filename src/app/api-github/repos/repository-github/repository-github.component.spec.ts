import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryGithubComponent } from './repository-github.component';

describe('RepositoryGithubComponent', () => {
  let component: RepositoryGithubComponent;
  let fixture: ComponentFixture<RepositoryGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryGithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
