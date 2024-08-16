package com.sj.controller;

import java.io.IOException;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sj.db.BooksCollection;
import com.sj.model.Book;

//@RestController
//@RequestMapping("/popularlib")
public class BookController {
	  
	@Autowired
	BooksCollection booksDB;		
		
	@GetMapping("/books")
	public Set<Book> getAllBooks(){		
		return this.booksDB.getBookSet();		
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable int id) {		
		return this.booksDB.getBookById(id);		
	}
	
	
	@GetMapping("/redirect")
	public void handleRedirect(HttpServletRequest request, HttpServletResponse response) throws IOException {		
		 response.sendRedirect("/reviews/redirect_endpoint");		
	}
	
	
	
	
	
	 @GetMapping("/forwarding_endpoint")
	    public void makeForward(HttpServletRequest request, HttpServletResponse response) 
	    		throws ServletException, IOException {
		 
	     request.getServletContext().getRequestDispatcher("/reviews/forwarding_endpoint").forward(request, response);
	}
	
	
	
	
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		return this.booksDB.addBook(book);		
	}
	
	@PutMapping("/books/{id}")
	Book updateBook(@PathVariable int id, @RequestBody Book b){		
	           return this.booksDB.updateBook(id, b);	
	}
	
	@DeleteMapping("/books")
	String deleteBook(@PathVariable int id ) {		
		return this.booksDB.deleteBook(id);			
	}
	
}
