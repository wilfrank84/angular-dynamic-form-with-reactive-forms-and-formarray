
export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  validateEmail: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      validateEmail?: boolean,
      order?: number,
      controlType?: string
    } = {}) {

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.validateEmail = !!options.validateEmail;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
