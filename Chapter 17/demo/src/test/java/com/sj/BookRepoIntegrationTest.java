package com.sj;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;
import com.sj.dao.BookRepository;
import com.sj.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@RunWith(SpringRunner.class)

@DataJpaTest
public class BookRepoIntegrationTest {		
	
	    @Autowired
	    private TestEntityManager entityManager;

	    @Autowired
	    private BookRepository bookRepository;	    
	    
	    @Test
	    public void whenfindByTitle_thenReturnBook() {
	        // given
	      Book book = new Book(101,"t1","a1",13);
	      entityManager.merge(book);
	      entityManager.flush();

	        // when
	       Book found = bookRepository.findByTitle(book.getTitle());

	        // then
	       assertThat(found.getTitle()).isEqualTo(book.getTitle());
	    }
	    
}
