package com.sj;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
	
	@GetMapping
	public String sayHi() {
		return "hello world";
	}
	
	
	
	
	

}
