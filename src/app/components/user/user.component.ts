import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UserService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras.state as IUser | undefined;
      if (state) {
        this.user = state
      } else {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
