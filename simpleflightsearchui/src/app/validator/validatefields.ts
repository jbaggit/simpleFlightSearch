/*
  12/06/2019 JAB
  This validation has never been used.  Will leave it here for future use and fererence
*/
import {AbstractControl} from '@angular/forms';

export function ValidateFlightSearch(control: AbstractControl) {

    if(control && control.value!=='') {

        const flightNumberControl = control.root.get('flightNumber').value;
        const departureDateControl = control.root.get('departure').value; // This is the date.
        const originControl = control.root.get('origin').value;
        const destinationControl = control.root.get('destination').value;

        let isValidFlightSearch: boolean = (flightNumberControl!=='' && departureDateControl!=='' && originControl==='' && destinationControl==='');
        let isValidOrdDestSearch: boolean = (flightNumberControl=='' && departureDateControl!=='' && originControl!=='' && destinationControl!=='');
        
        console.log("ValidateFlightSearch : isValidFlightSearch="+isValidFlightSearch+" isValidOrdDestSearch="+isValidOrdDestSearch);

        if(isValidFlightSearch || isValidOrdDestSearch) {
            return null;
        } else {
            return {isError: true};
        } 


        
    }

    return null;
}

export function ValidateFlightNumber(control: AbstractControl) {

    // Check the Date.  The date hshould be filled out first.
    if(control && control.value!=='') {
        const departureDateControl = control.root.get('departure').value; // This is the date.
        if(departureDateControl==='') {
            console.log("This returns true");
            return {isError: true};
        } else {
            console.log("This returns null");
            return null;
        }
    }
    return null;
    //console.log("I am now pressing the Flight Number field");
}
