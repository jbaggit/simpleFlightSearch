package com.simpleflight.search.rest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simpleflight.search.entity.Flight;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FlightRestController {
	
	private List<Flight> flights;
	
	private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss", Locale.ENGLISH);
	
	// define @PostConstruct to load the Flights data..
	@PostConstruct
	public void loadData() {

		flights = new ArrayList<Flight>();
		
		flights.add(new Flight("2005", "UA","IAH","2018-01-31T05:10:00","ORD","2018-01-31T07:57:00","Airbus A320",925,"02:47","Arrived at Gate"));
		flights.add(new Flight("0638","UA","IAH","2018-01-31T07:45:00","ORD","2018-01-31T10:18:00","Boeing 737-900",925,"02:33","Arrived at Gate"));
		flights.add(new Flight("1160", "UA","IAH","2018-01-31T12:05:00","ORD","2018-01-31T14:38:00","Boeing 737-800",925,"02:41","Arrived at Gate"));
		flights.add(new Flight("1256","UA","IAH","2018-01-31T14:22:00","ORD","2018-01-31T17:01:00","Boeing 737-800",925,"02:41","On Time"));
		flights.add(new Flight("2153","UA","IAH","2018-01-31T16:24:00","ORD","2018-01-31T19:27:00","Boeing 737-800", 925,"02:47","On Time"));	
	    flights.add(new Flight("2155","UA","IAH","2018-01-31T18:10:00","ORD","2018-01-31T20:49:00","Boeing 737-900",925,"02:39","On Time"));
		flights.add(new Flight("2131","UA","IAH","2018-01-31T19:49:00","ORD","2018-01-31T22:00:00","Boeing 737-900",925,"02:31","On Time"));
		flights.add(new Flight("2043","UA","ORD","2018-01-31T06:08:00","IAH","2018-01-31T08:42:00","Boeing 737-800",925,"02:34","Arrived at Gate"));
		flights.add(new Flight("0748","UA","ORD","2018-01-31T08:10:00","IAH","2018-01-31T10:44:00","Boeing 737-900",925,"02:34","Arrived at Gate"));	
		flights.add(new Flight("2166","UA","ORD","2018-01-31T10:15:00","IAH","2018-01-31T12:53:00","Airbus A320",925,"02:34","Arrived at Gate"));
		flights.add(new Flight("2171","UA","ORD","2018-01-31T12:45:00","IAH","2018-01-31T15:34:00","Airbus A320",925,"02:39","On Time"));	
		flights.add(new Flight("1128","UA","ORD","2018-01-31T14:05:00","IAH","2018-01-31T16:52:00","Boeing 737-800",925,"02:41","On Time"));
	}
	
	@GetMapping("/flights")
	public List<Flight> getFlights() {
		
		return flights;
	}
	
	@GetMapping("/flights/{flightNumber}/{departureDate}")
	public List<Flight> getFlightNumber(@PathVariable Integer flightNumber, @PathVariable String departureDate) {
		
		
		LocalDate date = LocalDate.parse(departureDate);
		
		List<Flight> inFlight = flights
				  .stream()
				  .filter(f -> f.getFlightNumber().equals(flightNumber.toString()) && LocalDate.parse(f.getDeparture(), formatter).equals(date))
				  .collect(Collectors.toList());
		
		return inFlight;
	}	
	
	@GetMapping("/flights/{origin}/{destination}/{departureDate}")
	public List<Flight> getRoute(@PathVariable String origin,@PathVariable String destination,@PathVariable String departureDate) {
		
		LocalDate date = LocalDate.parse(departureDate);
		
		List<Flight> inFlight = flights
				  .stream()
				  .filter(f -> f.getOrigin().equals(origin) && f.getDestination().equals(destination) && LocalDate.parse(f.getDeparture(), formatter).equals(date))
				  .collect(Collectors.toList());
		
		return inFlight;
	}	
	
	


		
}
