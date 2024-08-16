package com.demo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JavaConfig {
	
	
	public Car car() {
		
		return new Car();
	}
	
}
