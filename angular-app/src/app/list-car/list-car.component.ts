import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Car {
  id: number,
  brand: string,
  model: string,
  year: number,
  price: number
}

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  constructor(public httpClient: HttpClient) {
  }

  cars: Car[] = []

  deleteCar(id: any) {
    this.httpClient.delete(`http://localhost:8080/api/cars/${id}`).subscribe(data => {
      console.log('success')
    }, error => {
      console.log('failed')
    })
    this.cars = this.cars.filter(car => car.id !== id)
  }

  ngOnInit(): void {
    this.httpClient.get<Car[]>('http://localhost:8080/api/cars').subscribe(cars => {
      this.cars = cars
    })
  }

}
