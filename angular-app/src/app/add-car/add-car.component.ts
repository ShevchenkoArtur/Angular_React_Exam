import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CarsApiService} from "../services/cars-api.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(public httpClient: HttpClient,
              public carsApi: CarsApiService,
              public notification: NotificationService
  ) {}

  notificationMessage: string = 'Машина была добавлена!'

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
    this.carsApi.addCar(this.form.value)
    this.form.reset()
    this.notification.setAddNotificationToggle(true)

    if(this.notification.notificationFlags.isAdd) {
      setTimeout(() => {
        this.notification.setAddNotificationToggle(false)
      }, 2000)
    }
  }
}
