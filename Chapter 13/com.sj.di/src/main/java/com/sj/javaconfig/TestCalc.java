package com.sj.javaconfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;






public class TestCalc {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	
	   ApplicationContext context = new ClassPathXmlApplicationContext("java-config.xml");
	   System.out.println("hi");
	   
	   
	    User user =(User) context.getBean("user");
	
	    user.invokeCalculator(13); 
	
	
	}

}
