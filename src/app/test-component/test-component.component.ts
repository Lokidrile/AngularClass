import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css',],
})
export class TestComponentComponent implements OnInit {

  testingVariable = 'valor inicial';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange() {
    console.log(this.testingVariable);
  }
}
