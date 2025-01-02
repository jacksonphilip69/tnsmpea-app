import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-members.component.html',
  styleUrl: './state-members.component.css'
})
export class StateMembersComponent {
  members = [
    { name: ' O.Kannan', role: 'President', photo: 'assets/images/dp.avif' },
    { name: 'R.Boobalan', role: 'Secretary', photo: 'assets/images/dp.avif' },
    { name: 'A.Mohan Babu', role: 'Treasurer', photo: 'assets/images/dp.avif' },
   
  ];
}

