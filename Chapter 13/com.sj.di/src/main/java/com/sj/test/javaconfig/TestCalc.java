package com.sj.test.javaconfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sj.javaconfig.User;




public class TestCalc {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	
	   ApplicationContext context = new ClassPathXmlApplicationContext("java-config.xml");
	   
	   
	    User user =(User) context.getBean("user");
	
	    user.invokeCalculator(13); 
	
	
	}

}
