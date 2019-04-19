import { Component, Input, OnInit }  from '@angular/core';
import { FormArray, FormBuilder, FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  braveList: FormArray;
  payLoad = '';

  // returns all form groups under contacts
  get braveFormGroup() {
    return this.form.get('braves') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private qcs: QuestionControlService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      braves: this.fb.array([this.createGroup()])
    })

    this.braveList = this.form.get('braves') as FormArray;
  }

  createGroup(): FormGroup {
    return this.qcs.toFormGroup(this.questions);
  }

  // add a contact form group
  addContact() {
    this.braveList.push(this.createGroup());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.braveList.removeAt(index);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
