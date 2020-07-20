import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconDeleteComponent implements OnInit {
  public myIcon = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
