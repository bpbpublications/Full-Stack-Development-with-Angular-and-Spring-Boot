package com.sj.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sj.entity.Book;



@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
	
	
	public Book findByTitle(String title);
	
	
	@Query("select b from book b where b.author='JohnN'")
	public List<Book> getAllBooksByAuthor(String author);

}
