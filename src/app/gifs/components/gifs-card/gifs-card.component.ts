import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {
  constructor() {}
  @Input('gif')
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Property gif is required');
  }
}
