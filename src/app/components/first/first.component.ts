import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-first',
    standalone: true,
    imports: [],
    templateUrl: './first.component.html',
    styleUrl: './first.component.css'
})
export class FirstComponent {
      @Input() name = '';
}
