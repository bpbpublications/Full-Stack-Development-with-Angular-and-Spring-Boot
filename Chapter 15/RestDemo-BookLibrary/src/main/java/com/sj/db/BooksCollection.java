package com.sj.db;

import java.util.TreeSet;

import org.springframework.stereotype.Component;

import com.sj.model.Book;

@Component
public class BooksCollection {
	TreeSet<Book> bookSet = new TreeSet<Book>();
	

	public BooksCollection() {

		Book b1 = new Book(1, "Not without my daughter", "Betty Mehmoody", 2000);
		Book b2 = new Book(2, "Accidental PrimeMinister", "Sanjay Baru", 3500);
		Book b3 = new Book(3, "Abstract Algebra", "JNash", 4000);
		Book b4 = new Book(4, "Papillon", "Henry C", 5000);

		bookSet.add(b1);
		bookSet.add(b2);
		bookSet.add(b3);
		bookSet.add(b4);
	}

	public TreeSet<Book> getBookSet() {
		return bookSet;
	}

	public void setBookSet(TreeSet<Book> bookSet) {
		this.bookSet = bookSet;
	}
	
	public Book getBookById(int id) {
		//Book bookFound = null;
		for(Book bfound: this.bookSet) {
			
			if(bfound.getBookId()==id)
				return bfound;
			
		}
		
		return new Book();
		
		
	}
	
	

	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		bookSet.add(book);
		return bookSet.last();
	}
	
	public Book updateBook(int id,Book book) {
		Book bookToUpdate = this.getBookById(id);
		bookToUpdate.setPrice(book.getPrice());
		this.bookSet.remove(this.getBookById(id));
		this.bookSet.add(bookToUpdate);
		return getBookById(id);
	}
	
	
	
	
	
	
	public String deleteBook(int id) {
		bookSet.remove(this.getBookById(id));
		return "Deletion successful";
	}
	
	
	
	
	
	
	
	
	
}
