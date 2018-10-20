import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(public navCtrl: NavController) {
  	this.items = [{
  		name: "Restaurant 1",
  		dishes: [{
  			name: "Dish 1",
  			price: 12
  		},{
  			name: "Quesadillas",
  			price: 5
  		}]
  	},{
  		name: "Restaurant 2",
  		dishes: [{
  			name: "Dish 1",
  			price: 20
  		}]
  	}];
  }

}
