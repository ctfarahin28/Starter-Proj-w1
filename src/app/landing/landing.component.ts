import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  taskForm;
  fname;
  // angForm: FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.createForm();
  // }
  // createForm() {
  //   this.angForm = this.fb.group({
  //     name: ['', Validators.required],
  //     address: ['', Validators.required],
  //   });
  // }
  // ngOnInit() {
  //   // this.taskForm = new FormGroup({
  //   //   fname: new FormControl('angular@gmail.com'),
  //   // });
  // }
  // onSubmit() {
  //   if (this.taskForm.valid) {
  //     console.log('Form Submitted!');
  //     this.taskForm.reset();
  //   }
  // }

  // constructor(private formBuilder: FormBuilder) {
  //   this.taskForm = this.formBuilder.group({
  //     fname: '',
  //     lname: '',
  //   });
  // }

  // onSubmit(formData) {
  //   var name = formData['name'];
  // }
}
