import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneComponent } from '../standalone/standalone.component';

@Component({
  selector: 'app-bootstrap-standalone',
  standalone: true,
  imports: [CommonModule,StandaloneComponent],
  templateUrl: './bootstrap-standalone.component.html',
  styleUrls: ['./bootstrap-standalone.component.css']
})
export class BootstrapStandaloneComponent {

}
