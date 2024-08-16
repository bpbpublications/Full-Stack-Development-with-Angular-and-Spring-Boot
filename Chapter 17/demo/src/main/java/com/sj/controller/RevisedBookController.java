package com.sj.controller;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sj.entity.Book;
import com.sj.service.BookService;

@RestController
@RequestMapping("/popularlibs")
public class RevisedBookController {
	@Autowired
	BookService bookService;
		
	@GetMapping("/books")
	public Collection<com.sj.entity.Book> getAllBooks(){		
		return this.bookService.getAllBooks();		
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable int id) {		
		return this.bookService.getBookById(id);		
	}
	
	@GetMapping("books/authors/{author}")
	public List<Book> getBooksByAuthor(@PathVariable String author) {
		
		return bookService.getBooksByAuthor(author);
	}
	
	@GetMapping("books/titles/{title}")
	public Book findBookByTitle(@PathVariable String title) {
		return this.bookService.findByTitle( title);
	}
		
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		return this.bookService.addBook(book);		
	}
	
	@PutMapping("/books/{id}")
	Book updateBook(@PathVariable int id, @RequestBody Book b){		
	           return this.bookService.updateBook(id, b);	
	}
	
	@DeleteMapping("/books")
	String deleteBook(@PathVariable int id ) {		
		return this.bookService.deleteBook(id);			
	}

}
