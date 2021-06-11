import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarsApiService} from "../services/cars-api.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})

export class ListCarComponent implements OnInit {

  constructor(public httpClient: HttpClient,
              public carsApi: CarsApiService,
              public router: Router,
              public notification: NotificationService
  ) {
  }

  notificationMessage: string = 'Машина была удалена!'

  onEdit(id: number) {
    this.router.navigate(['/edit-car'])
    this.carsApi.editedCarId = id
  }

  onDelete(id: number) {
    this.carsApi.deleteCar(id)

    this.notification.setDeleteNotificationToggle(true)

    if(this.notification.notificationFlags.isDelete) {
      setTimeout(() => {
        this.notification.setDeleteNotificationToggle(false)
      }, 2000)
    }
  }

  ngOnInit(): void {
    this.carsApi.getCars()
  }
}
