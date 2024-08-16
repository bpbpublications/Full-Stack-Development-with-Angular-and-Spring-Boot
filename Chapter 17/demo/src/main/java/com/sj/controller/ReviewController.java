package com.sj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
	
	@GetMapping("/forwarding_endpoint")
	public String getForwardedStuff(){
		
		return ("Worked on forwarded stuff ");
		
	}
	
	@GetMapping("/redirect_endpoint")
	public String getRedirectSendResponse() {
		return("Because of redirect, a new request is received "
				+ "and reviewcontroller is sending the response.");
	}
	
	
}
