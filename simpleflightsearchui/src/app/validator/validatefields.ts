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