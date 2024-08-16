package com.sj;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.sj.dao.BookRepository;
import com.sj.entity.Book;
import com.sj.service.BookService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceIntegrationTest {
	
	
	  @Before 
	  public void setUp() {
		  Book book = new Book(1,"t1","a1",13);
	  
	  Mockito.when(bookRepository.findByTitle(book.getTitle())) .thenReturn(book);
	  }	
	
	   @Autowired
	    private BookService bookService;
	
	    @MockBean	    
	    private BookRepository bookRepository;
	    
	    @Test
		  public void whenValidtitle_thenBookShouldBeFound() {
		      String title = "t1";
		      Book found = bookService.findByTitle(title);
		   
		       assertThat(found.getTitle())
		        .isEqualTo(title);
		   }
	      

}
