package com.sj;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import com.sj.controller.RevisedBookController;
import com.sj.entity.Book;
import com.sj.service.BookService;

@RunWith(SpringRunner.class)
@WebMvcTest(RevisedBookController.class)

public class BookControllerIntegrationTest {
	
	@Autowired
    private MockMvc mvc;

    @MockBean
    private BookService service;
	
    @Test
    public void givenBooks_whenGetBooks_thenReturnJsonArray()
      throws Exception {
        
    	Book book = new Book(1,"t1","a1",13);

        List<Book> allBooks = Arrays.asList(book);

        when(service.getAllBooks()).thenReturn(allBooks);

        mvc.perform(get("/popularlibs/books")
          .contentType(MediaType.APPLICATION_JSON))
          .andExpect(status().isOk())          
          .andExpect(jsonPath("$[0].title", is(book.getTitle())));
    }

}
