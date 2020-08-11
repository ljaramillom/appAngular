import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/servicio/user.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  notFound = false;
  title: string;
  user: User;
  users: User[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.title = 'Servicios';
    this.getAllUsers();
  }

  getUser(userId: string) {
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI: User) => {
      this.user = userFromTheAPI;
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response;
    }, error => console.error(error));
  }

}
