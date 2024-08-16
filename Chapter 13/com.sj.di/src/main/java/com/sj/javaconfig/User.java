package com.sj.javaconfig;



import com.sj.services.Calculator;


public class User {
	
	
	Calculator calc;

	public void invokeCalculator(int no) {
		calc.findSqrRoot(no);
	}

	public Calculator getCalc() {
		return calc;
	}

	public void setCalc(Calculator calc) {
		this.calc = calc;
	}
   
}
