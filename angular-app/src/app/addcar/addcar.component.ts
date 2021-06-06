import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(public httpClient: HttpClient) {
  }

  inputs = {
    brand: '',
    model: '',
    price: '',
    year: ''
  }

  addCar() {
    this.httpClient.post('http://localhost:8080/api/cars', this.inputs).subscribe(data => {
      console.log('success')
    }, error => {
      console.log('failed')
    })
    this.inputs.brand = ''
    this.inputs.model = ''
    this.inputs.price = ''
    this.inputs.year = ''
  }

  ngOnInit(): void {
  }

}
