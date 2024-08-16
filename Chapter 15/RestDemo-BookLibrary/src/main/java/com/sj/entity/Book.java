package com.sj.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="book")
public  class Book {
	@Id()
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int bookId;
	private String title;
	String author;
	double price;
	
	public Book(int bookId, String title, String author, double price) {
		super();
		this.setBookId(bookId);
		this.setTitle(title);
		this.author = author;
		this.price = price;
	}
	public double getPrice() {
		return price;
	}
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Book [bookId=" + getBookId() + ", title=" + getTitle() + ", author=" + author + ", price=" + price + "]";
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((author == null) ? 0 : author.hashCode());
		result = prime * result + bookId;
		long temp;
		temp = Double.doubleToLongBits(price);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		if (author == null) {
			if (other.author != null)
				return false;
		} else if (!author.equals(other.author))
			return false;
		if (bookId != other.bookId)
			return false;
		if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}
	public int compareTo()
	{
		return getBookId();
		
	}
	
	public Book(int bookId, double price) {
		super();
		this.setBookId(bookId);
		this.price = price;
	}
	public int getBookId() {
		return bookId;
	}
	public int setBookId(int bookId) {
		this.bookId = bookId;
		return bookId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setPrice(double price2) {
		// TODO Auto-generated method stub
		this.price=price2;
	}
	public String getAuthor() {
		// TODO Auto-generated method stub
		return this.author;
	}
	public void setAuthor(String author2) {
		// TODO Auto-generated method stub
		 this.author=author2;
	}
	
	

}

