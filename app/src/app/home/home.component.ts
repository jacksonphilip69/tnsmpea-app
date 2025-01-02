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
  ngAfterViewInit() {
  }

  notifications = [
    "New update available!",
    "Holiday notice for tomorrow",
    "Membership renewal period is open!",
  ];

  galleryItems = [
    { image: 'assets/images/images.jpg', title: 'UI / UX Design', description: 'Design amazing user experiences' },
    { image: 'assets/images/images.jpg', title: 'Web Development', description: 'Build powerful websites' },
    { image: 'assets/images/images.jpg', title: 'Mobile App', description: 'Create mobile applications' },
    { image: 'assets/images/images.jpg', title: 'Game Design', description: 'Design exciting games' },
    { image: 'assets/images/images.jpg', title: 'SEO & Marketing', description: 'Promote and optimize your site' },
    { image: 'assets/images/images.jpg', title: 'Photography', description: 'Capture stunning images' },
    { image: 'assets/images/images.jpg', title: 'Graphic Design', description: 'Create beautiful graphics' },
    { image: 'assets/images/images.jpg', title: 'Illustrations', description: 'Draw creative illustrations' }
  ];
  

  currentIndex: number = 0;

  // Go to the next gallery item
  nextItem() {
    if (this.currentIndex < this.galleryItems.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first item
    }
    this.updateGallery();
  }

  // Go to the previous gallery item
  prevItem() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.galleryItems.length - 1; // Loop to last item
    }
    this.updateGallery();
  }

  // Update the gallery view based on the current index
  updateGallery() {
    const galleryWrapper = document.querySelector('.gallery-wrapper') as HTMLElement;
    const itemWidth = galleryWrapper.firstElementChild?.getBoundingClientRect().width || 0;
    galleryWrapper.style.transform = `translateX(-${this.currentIndex * (itemWidth + 20)}px)`;
  }
  
}
