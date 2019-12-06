package com.simpleflight.search.entity;

public class Flight {

    private String flightNumber;
    private String carrier;
    private String origin;
    private String departure; // departure date and time
    private String destination; //example ORD
    private String arrival; // arrival date and time
    private String aircraft; //Example-- "Airbus A320",
    private Integer distance;
    private String travelTime; //Example": "02:47",
    private String status; // "Arrived at Gate"	
    
    public Flight(String flightNumber, String carrier, String origin, String departure, String destination,
			String arrival, String aircraft, Integer distance, String travelTime, String status) {
		this.flightNumber = flightNumber;
		this.carrier = carrier;
		this.origin = origin;
		this.departure = departure;
		this.destination = destination;
		this.arrival = arrival;
		this.aircraft = aircraft;
		this.distance = distance;
		this.travelTime = travelTime;
		this.status = status;
	}

	public Flight() {

    }
    
	public String getFlightNumber() {
		return flightNumber;
	}
	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}
	public String getCarrier() {
		return carrier;
	}
	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public String getAircraft() {
		return aircraft;
	}
	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}
	public Integer getDistance() {
		return distance;
	}
	public void setDistance(Integer distance) {
		this.distance = distance;
	}
	public String getTravelTime() {
		return travelTime;
	}
	public void setTravelTime(String travelTime) {
		this.travelTime = travelTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
	
}
