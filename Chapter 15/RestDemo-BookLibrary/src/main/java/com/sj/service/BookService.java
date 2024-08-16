package com.sj.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sj.dao.BookRepository;
import com.sj.entity.Book;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepository;
	
	public Collection<Book> getAllBooks(){
	   return	bookRepository.findAll();
	}
	
	public Book getBookById(int id) {
		
		Optional<Book> book= bookRepository.findById(id);
		return book.get();		
	}
	public Book addBook(Book newBook) {
		return bookRepository.save(newBook);
	}
	
	public Book updateBook(int id, Book book) {
		        Book bookToUpdate = this.getBookById(id);
		        bookToUpdate.setAuthor(book.getAuthor());
		        bookToUpdate.setPrice(book.getPrice());
		        bookToUpdate.setTitle(book.getTitle());
		     return   bookRepository.save(bookToUpdate);
		        
	}
	
	public String deleteBook(int id) {
		bookRepository.delete(this.getBookById(id));
		return "Book with id"+id+"has been deleted";
		
	}

	public List<Book> getBooksByAuthor(String author) {
		// TODO Auto-generated method stub
		System.out.println(author);
		return bookRepository.getAllBooksByAuthor(author);
	}

	public Book findByTitle(String title) {
		// TODO Auto-generated method stub
		return bookRepository.findByTitle(title);
	}
}
