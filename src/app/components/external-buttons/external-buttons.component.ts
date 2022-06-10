import { Component, OnInit } from '@angular/core';
import { BUTTONS} from 'src/shared/constants/buttons-url.constant';

@Component({
  selector: 'external-buttons',
  templateUrl: './external-buttons.component.html',
  styleUrls: ['./external-buttons.component.css']
})
export class ExternalButtonsComponent implements OnInit {

  buttonsURL = BUTTONS;
  constructor() { }

  ngOnInit(): void {
  }

}
