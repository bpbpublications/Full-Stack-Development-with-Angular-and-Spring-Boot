package com.sj.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class BookController {
	
	@GetMapping("/hi")
	public String sayHi() {
		return "hello world";
	}

	public BookController() {
		super();
		// TODO Auto-generated constructor stub
		System.out.println("here");
	}
	
	
	
	
	
	
	

}
