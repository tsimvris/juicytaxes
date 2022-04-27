import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-haupt',
  templateUrl: './haupt.component.html',
  styleUrls: ['./haupt.component.scss']
})
export class HauptComponent implements OnInit {
  plantPrice = 50;
  public nameForm:FormGroup;
  myPlants: string = "";
  myErnte: string = "";

  constructor( private formBuilder: FormBuilder) {

    this.nameForm = this.formBuilder.group({
      pflanzenJahr: '',
      ernte: '',

    });
  }

  clickme() {

    this.myPlants=this.nameForm.get('pflanzenJahr')?.value;
    this.myErnte=this.nameForm.get('ernte')?.value;

  }



  ngOnInit(): void {

  }


}
