import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  notifications = [
    "New update available!",
    "Holiday notice for tomorrow",
    "Membership renewal period is open!",
  ];
}
