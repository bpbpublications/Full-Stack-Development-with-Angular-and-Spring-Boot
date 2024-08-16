package com.sj.javaconfig;


	import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

	
	
    @Configuration
    @ComponentScan
	public class MyConfig {
    	
    	
	 
	    public MyConfig() {
			super();
			// TODO Auto-generated constructor stub
			System.out.println("hello");
		}

		@Bean(name="calc")
	    public Calculator calculator()
	    {
	    	
	    	return new CalculatorA();
	        
	    }
	

	    @Bean(name="user")
	    public User user() {
	    	return new User();
	    }
}
