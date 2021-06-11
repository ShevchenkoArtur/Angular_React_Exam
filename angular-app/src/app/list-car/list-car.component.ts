import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarsApiService} from "../cars-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})

export class ListCarComponent implements OnInit {

  constructor(private httpClient: HttpClient, public carsApi: CarsApiService, private router: Router) {
  }

  onEdit(id: number) {
    this.router.navigate(['/edit-car'])
    this.carsApi.editedCarId = id
  }

  ngOnInit(): void {
    this.carsApi.getCars()
  }

}
