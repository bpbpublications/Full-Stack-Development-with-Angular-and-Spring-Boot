package com.sj.annotations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import com.sj.services.Calculator;


public class User {
	
	@Autowired
	@Qualifier("calc2")
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
