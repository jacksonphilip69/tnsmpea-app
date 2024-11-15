import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-district-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './district-members.component.html',
  styleUrl: './district-members.component.css'
})
export class DistrictMembersComponent {
  members = [
    { name: 'Alice Green', role: 'District Head', photo: 'assets/images/dp.avif' },
    { name: 'Bob White', role: 'Deputy Head', photo: 'assets/images/dp.avif' },
    { name: 'Charlie Black', role: 'Treasurer', photo: 'assets/images/dp.avif' },
    { name: 'Diana Blue', role: 'Member', photo: 'assets/images/dp.avif' },
    { name: 'Edward Red', role: 'Member', photo: 'assets/images/dp.avif' }
  ];
}

