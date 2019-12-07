import {Component, OnInit} from '@angular/core';
import {Flight} from './flight';
import { FlightService } from './flight.service';
import { error } from 'util';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ValidateFlightSearch,ValidateFlightNumber} from '../validator/validatefields';


@Component({
    selector: 'app-flight',
    templateUrl: './flight.component.html',
    styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit{

    flights: Flight[];
    flight = new Flight();
    constructor(private _flightService:FlightService, private fb: FormBuilder){
    }

    angForm: FormGroup;
    submitted = false;
    createForm() {
      this.angForm = this.fb.group({
        flightNumber: ['',Validators.required],
        departure:['',Validators.required],
        origin: ['',Validators.required],
        destination: ['',Validators.required]
      });

    //   this.angForm.controls.flightNumber.valueChanges
    //   .subscribe(
    //       x => this.angForm.controls.flightNumber.updateValueAndValidity()
    //   ) 
   
    }



    ngOnInit() {
      this.createForm();
    }
   
    flightsToSearch() {
        this.submitted = true;
        // stop here if form is invalid
       /* if (this.angForm.invalid) {
            return;
        } */
       // console.log("this.angForm.invalid : "+this.angForm.invalid);
       console.log(this.angForm.value);
        this.searchFlights(this.angForm.get('flightNumber').value, 
                           this.angForm.get('departure').value,
                           this.angForm.get('origin').value, 
                           this.angForm.get('destination').value); 
    }



    getFlights(flightNumber: string, departureDate: string, origin: string, destination: string): void {
        this._flightService.searchFlights(flightNumber,departureDate,origin,destination)
        .subscribe((flightData) => {
            this.flights = flightData,
            console.log(flightData)
        }, (error) =>{
            console.log(error)
        });
    }


    searchFlights(flightNumber: string, departureDate: string,origin: string, destination: string):void {
        this._flightService.searchFlights(flightNumber,departureDate,origin,destination)
           .subscribe((flightData) => {this.flights = flightData; this.getFlights(flightNumber,departureDate,origin,destination);},(error) => {
               console.log(error)
           })
    }

    onReset() {
        this.submitted = false;
        this.angForm.reset();
    }    
    


}