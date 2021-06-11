import {Component, OnInit} from '@angular/core';
import {CarsApiService} from "../services/cars-api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})

export class EditCarComponent implements OnInit {

  constructor(public carsApi: CarsApiService,
              public router: Router,
              public notification: NotificationService
  ) {
  }

  notificationMessage: string = 'Машина была обновлена!'

  form!: FormGroup

  inputValues = {
    brand: this.carsApi.cars.filter(car => car.id === this.carsApi.editedCarId)[0].brand,
    model: this.carsApi.cars.filter(car => car.id === this.carsApi.editedCarId)[0].model,
    year: this.carsApi.cars.filter(car => car.id === this.carsApi.editedCarId)[0].year,
    price: this.carsApi.cars.filter(car => car.id === this.carsApi.editedCarId)[0].price
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      brand: new FormControl(this.inputValues.brand),
      model: new FormControl(this.inputValues.model),
      year: new FormControl(this.inputValues.year),
      price: new FormControl(this.inputValues.price),
    })
  }

  navigateToListCar() {
    this.router.navigate(['/list-car'])
  }

  updateCar() {
    this.carsApi.updateCar(this.carsApi.editedCarId, this.form.value)

    this.notification.setEditNotificationToggle(true)

    if (this.notification.notificationFlags.isEdit) {
      setTimeout(() => {
        this.notification.setEditNotificationToggle(false)
      }, 2000)
    }
  }
}
