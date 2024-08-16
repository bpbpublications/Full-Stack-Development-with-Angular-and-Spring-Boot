package com.example.demo;

import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.sj.test.BeanFactory;
import com.sj.test.XMLBeanFactory;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		org.springframework.beans.factory.BeanFactory factory = new XmlBeanFactory(beans.xml);
		
		
		
		
		
		
	}

}
