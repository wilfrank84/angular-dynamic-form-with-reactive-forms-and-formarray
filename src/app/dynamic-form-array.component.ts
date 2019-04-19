import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormArrayComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() itemsFormArray: FormArray;

  constructor() {}

  ngOnInit() {}

}
