package com.sj.test.annotaitons;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sj.annotations.User;




public class TestCalc{

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	
	  
	    ApplicationContext context = new ClassPathXmlApplicationContext("annotaion-config.xml");
	   
	    User user =(User) context.getBean("user");
	
	    user.invokeCalculator(13); 
	
	
	}

}
