import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  details!: FormGroup;
  submitted = false;
  editObj: any = {};
  name: any = '';
  age: any = '';
  mobile: any = '';
  address: any = '';
  in = 0;
  buttonText = 'Submit';
  detailArr :any= [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.details = this.formBuilder.group({
      // id: [null],
      name: [null, Validators.required],
      age: [null, Validators.required],
      mobile: [null, Validators.required],
      address: [null, Validators.required]
    });
    this.detailArr
    if (JSON.parse(localStorage.getItem('data')!))
      this.detailArr = JSON.parse(localStorage.getItem('data')!);
    this.in = this.detailArr?.length;

    if (this.route.snapshot.queryParams['id']) {
      this.buttonText = 'Update';
      if (this.detailArr) {
        console.log(this.detailArr)
        this.editObj = this.detailArr.find(
          (cou: any) => cou.id - 1 == this.route.snapshot.queryParams['id']
        );
        console.log(this.name)


        console.log(this.editObj);
        if (this.editObj) {
        this.details.patchValue({
          name: this.editObj.name,
          age: this.editObj.age,
          mobile: this.editObj.mobile,
          address: this.editObj.address,
        });
        }
      }
    }
  }
  get f() {
    return this.details.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.details.invalid) {
      return;
    }
    if (this.route.snapshot.queryParams['id']) {
      this.detailArr.splice(
        this.route.snapshot.queryParams['id'],
        1,
        this.details.value
      );
    } else {
      this.details.value.id = this.in + 1;
      this.detailArr.push(this.details.value);
    }
    localStorage.setItem('data', JSON.stringify(this.detailArr));
    this.router.navigate(['/table']);
  }

}