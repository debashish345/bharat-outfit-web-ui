import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceService } from '../../services/device.service';


interface Image {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss'
})
export class ProductDisplayComponent {

  constructor(readonly device: DeviceService) { }

  images: Image[] = [
    { url: 'http://dummyimage.com/400x620.png/dddddd/000000', alt: 'Image 1' },
    { url: 'http://dummyimage.com/400x624.png/dddddd/000000', alt: 'Image 2' },
    { url: 'http://dummyimage.com/400x629.png/dddddd/000000', alt: 'Image 3' }
  ];
  currentIndex = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  showImage(index: number): void {
    this.currentIndex = index;
  }
}
