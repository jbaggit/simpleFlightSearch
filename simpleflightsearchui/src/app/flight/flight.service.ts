import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Flight } from './flight';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlightService {

    constructor(private _httpService: Http){}

    getAllFlights(): Observable<Flight[]>{

        return this._httpService.get("http://localhost:8080/simpleflightsearch//api/flights") 
             .map((response: Response) => response.json())
             .catch(this.handleError)
    }

    private handleError(error: Response){

        return Observable.throw(error);
    }

    searchFlights(flightNumber: string, departureDate: string, origin: string, destination: string): Observable<Flight[]>{

        if(flightNumber!='' && departureDate!='' && origin=='' && destination=='') {
            return this._httpService.get("http://localhost:8080/simpleflightsearch//api/flights/"+flightNumber+"/"+departureDate)
            .map((response: Response) => response.json())
            .catch(this.handleError);
        } else if (flightNumber=='' && departureDate!='' && origin!='' && destination!='') {
            return this._httpService.get("http://localhost:8080/simpleflightsearch//api/flights/"+origin+"/"+destination+"/"+departureDate)
            .map((response: Response) => response.json())
            .catch(this.handleError);           
        }

    }
   
}