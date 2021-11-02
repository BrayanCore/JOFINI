import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  routeRequired: string;

  hide = true;

  password = new FormControl();
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        params.component ? this.routeRequired = params.component : '';
      }
    );
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo inválido';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  logIn() {
    const keys = {
      email: this.email.value,
      pass: this.password.value
    };

    if(keys.email !== 'admin@gmail.com' && keys.pass !== 'Equipo5') {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', 'userLogged');
      this.router.navigate([this.routeRequired]);
    }

  }

}
