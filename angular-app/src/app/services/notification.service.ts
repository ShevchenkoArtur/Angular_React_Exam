import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notificationFlags = {
    isAdd: false,
    isEdit: false,
    isDelete: false
  }

  setAddNotificationToggle(bool: boolean) {
    this.notificationFlags.isAdd = bool
  }

  setEditNotificationToggle(bool: boolean) {
    this.notificationFlags.isEdit = bool
  }

  setDeleteNotificationToggle(bool: boolean) {
    this.notificationFlags.isDelete = bool
  }
}
