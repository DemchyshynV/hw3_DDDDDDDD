import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {UserService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  users: IUser[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl(0)
    })
    this.userService.getAll().subscribe(value => this.users = value)
  }

  get() {
    const userId = this.form.controls['userId'].value;
    this.router.navigate([userId], {state: this.users[userId - 1]})
  }
}
