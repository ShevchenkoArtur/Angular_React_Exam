import {Injectable} from '@angular/core';
import {Car} from "../interfaces/car";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CarsApiService {

  constructor(public httpClient: HttpClient) {
  }

  cars: Car[] = []
  editedCarId: number = 0

  getCars() {
    this.httpClient.get<Car[]>('http://localhost:8080/api/cars').subscribe(data => {
      this.cars = data
    }, error => {
      console.log(error)
    })
  }

  deleteCar(id: number) {
    this.httpClient.delete(`http://localhost:8080/api/cars/${id}`).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
    this.cars = this.cars.filter(car => car.id !== id)
  }

  addCar(data: {}) {
    this.httpClient.post('http://localhost:8080/api/cars', data).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  updateCar(id: number, data: {}) {
    this.httpClient.put(`http://localhost:8080/api/cars/${id}`, data).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }
}
