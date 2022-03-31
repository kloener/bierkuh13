import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {
  CrownCapsUpdateFormFacadeService
} from "@app/modules/crown-caps/application/crown-caps-update-form-facade.service";
import {BehaviorSubject, filter, mergeMap, Observable, tap} from "rxjs";
import {CrownCaps} from "@app/modules/crown-caps/domain/crown-caps";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-crown-caps-update-form',
  templateUrl: './crown-caps-update-form.component.html',
  styleUrls: ['./crown-caps-update-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrownCapsUpdateFormComponent implements OnInit {
  details$: Observable<CrownCaps | undefined>;

  @Input() set identifier(val: string | null | undefined) {
    if (typeof val === 'string') {
      this.identifier$.next(val);
    }
  }

  formGroup: FormGroup | undefined;

  private readonly identifier$ = new BehaviorSubject<string>('');

  constructor(
    private readonly facadeService: CrownCapsUpdateFormFacadeService,
    private readonly fb: FormBuilder
  ) {
    this.details$ = this.identifier$.pipe(
      filter((identifier) => Boolean(identifier)),
      mergeMap((identifier) => this.facadeService.getDetailsOf(identifier)),
      tap(details => this.initializeFormGroup(details))
    );
  }

  ngOnInit(): void {
  }

  private initializeFormGroup(details: CrownCaps | undefined) {
    if (!details) { return; }
    this.formGroup = this.fb.group({
      name: this.fb.control(details.name),
      count: this.fb.control(details.count),
      link: this.fb.control(details.link),
      color: this.fb.control(details.color),
      brewery: this.fb.control(details.brewery),
      comment: this.fb.control(details.comment),
      year: this.fb.control(details.year),
      type: this.fb.control(details.type),
      assignees: this.fb.control(details.assignees),
    });
  }

  onSubmit(details: CrownCaps) {
    this.facadeService.update(details, this.formGroup?.value);
  }
}
