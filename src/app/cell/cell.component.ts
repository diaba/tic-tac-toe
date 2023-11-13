import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cell',
  standalone: true,

  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
  imports: [CommonModule, RouterOutlet, CellComponent],
})
export class CellComponent {}
