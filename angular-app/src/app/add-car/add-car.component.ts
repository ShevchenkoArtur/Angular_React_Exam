import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(public httpClient: HttpClient) {
  }

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }

  submit() {
    this.httpClient.post('http://localhost:8080/api/cars', this.form.value).subscribe(data => {
      console.log('success')
    }, error => {
      console.log('failed')
    })
  }

  // addCar() {
  //   this.httpClient.post('http://localhost:8080/api/cars', this.inputs).subscribe(data => {
  //     console.log('success')
  //   }, error => {
  //     console.log('failed')
  //   })
  //   this.inputs.brand = ''
  //   this.inputs.model = ''
  //   this.inputs.price = ''
  //   this.inputs.year = ''
  // }
}
