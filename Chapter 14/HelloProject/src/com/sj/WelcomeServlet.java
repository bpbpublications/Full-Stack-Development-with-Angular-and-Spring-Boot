package com.sj;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class WelcomeServlet
 */
@WebServlet("/hello")
public class WelcomeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public WelcomeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
	       String uname = request.getParameter("uname");      
	       if(uname.equals("admin")) {
	       
	         RequestDispatcher rd =     request.getRequestDispatcher("/GreetServlet");
	       
	               rd.include(request, response);
	       }
	
	       else {
	    	   request.setAttribute("userName", "Alex");
	    	   RequestDispatcher rd =     request.getRequestDispatcher("/welcome.jsp");
	    	   rd.include(request, response);
	       }
	       
	       /* PrintWriter out = response.getWriter();
	
	         out.println("Welcome.."+uname);*/
	
	}

}
