import {Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html',
  host: {
     "(document:click)": "closeDatepicker($event)"
  }
})
export class NgbdDatepickerPopup {
  dateModel;
  //@Output() selectDate = new EventEmitter<any>();

  @ViewChild("d") datePicker;
  
  // changeDate(event) {
  //   this.selectDate.emit(event);
  // }

  constructor(private _eref: ElementRef) { }
  public closeDatepicker(event) { // close the datepicker when user clicks outside the element
    //console.log( this.datePicker);
    // if (!this._eref.nativeElement.contains(event.target)) {
    //   this.datePicker.close();
    // }
  }
}