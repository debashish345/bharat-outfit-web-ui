import { Component, Input, Signal, WritableSignal } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input() items!: Signal<any>;
  @Input() imgSize!: string;
  @Input() maxImgSize!: string;

}
