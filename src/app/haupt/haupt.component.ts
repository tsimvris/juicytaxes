import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-haupt',
  templateUrl: './haupt.component.html',
  styleUrls: ['./haupt.component.scss']
})
export class HauptComponent implements OnInit {
  public nameForm:FormGroup;
  myPlants:any= "";
  myErnte:any= "";
  plantCost:any="";
  bruttoGewinn:any="";
  plantPrice:number=50;
  grammPrice:number=1.5;
  steuer:number=0.285;
  steuerAnteil:any= "";

  nettoGewinn:any="";
  constructor( private formBuilder: FormBuilder) {

    this.nameForm = this.formBuilder.group({
      pflanzenJahr: '',
      ernte: '',

    });
  }

  clickme() {

    this.myPlants=this.nameForm.get('pflanzenJahr').value;
    this.myErnte=this.nameForm.get('ernte').value;
    this.plantCost = this.plantPrice * this.myPlants;
    this.bruttoGewinn = (this.myErnte * this.grammPrice) - this.plantCost;
    this.steuerAnteil  = this.bruttoGewinn * this.steuer;
    this.nettoGewinn = this.bruttoGewinn - this.steuerAnteil;


  }










  ngOnInit(): void {

  }


}

