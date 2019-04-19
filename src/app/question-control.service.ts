import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    // questions.forEach(question => {

    //   console.log(question);

    //   switch(true) {
    //     case question.validateEmail:
    //       group[question.key] = [ question.value || '', [ Validators.required, Validators.email ]];
    //       break;
    //     case question.required:
    //       group[question.key] = [ question.value || '', Validators.required ];
    //       break;
    //     default:
    //       group[question.key] = [ question.value || '' ];
    //       break;
    //   }


    // });

    // console.log(questions);
    // return FormGroup(group);


    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
