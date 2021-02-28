import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss']
})
export class AdminDashboardContainerComponent implements OnInit {
  
  navItems = [
    {
      name: "Anasayfa",
      routerLink: "/admin/admin-dashboard"
    },
    {
      name: "Randevu Talepleri",
      routerLink: "/admin/list-appointment"
    },
    // {
    //   name: "CSS",
    //   routerLink: "css"
    // },
    // {
    //   name: "Details",
    //   routerLink: "technical"
    // }
  ]

  constructor(public auth: AngularFireAuth, private router: Router) { }
  
  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(["admin/login"]);
    });
  }

  ngOnInit(): void {
  }

}
