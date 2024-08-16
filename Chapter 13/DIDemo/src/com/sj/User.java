package com.sj;

import com.sj.services.Calculator;


public class User {
	
	Calculator calc;

	public void invokeCalculator() {
		calc.findSqrRoot(13);
	}

	public Calculator getCalc() {
		return calc;
	}

	public void setCalc(Calculator calc) {
		this.calc = calc;
	}
   
}
