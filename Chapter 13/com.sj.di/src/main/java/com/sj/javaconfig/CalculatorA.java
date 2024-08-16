package com.sj.javaconfig;

public class CalculatorA implements Calculator {

	
	public void findSqrRoot(int no) {
		// TODO Auto-generated method stub
	   System.out.println("This is calculatorA service provider");
       System.out.println("Square root of "+no+"is:"+Math.sqrt(no));
	}


	
}
