package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Card;
import com.revature.beans.User;
import com.revature.service.CardService;

@RestController
@RequestMapping(value = "/card")
public class CardController {

	// instance variables
	private CardService cs;

	@Autowired // setter injection
	public void setCardService(CardService cs) {
		this.cs = cs;
	}

	// methods
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Card>> getAllUsers() {
		return new ResponseEntity<>(cs.getAllCards(), HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Card> getUserById(@PathVariable int id) {
		Card c = cs.getCardById(id);
		if (c == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(c, HttpStatus.OK);
		}
	}

	// rewrite the above to use a query string
	// (will also work for form data passed in request body)
	// Use this format: http://localhost:8089/P2/card/byId?id=68
	@GetMapping(value = "/byId")
	public ResponseEntity<Card> getCardByIdWithQueryString(@RequestParam int id) {
		Card c = cs.getCardById(id);
		if (c == null) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<>(c, HttpStatus.OK);
		}
	}
	
	@PostMapping
	public ResponseEntity<String> createUser(@RequestBody Card card){
		ResponseEntity<String> resp = null;
		try {
			cs.addCard(card);
			resp = new ResponseEntity<>("CARD CREATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO CREATE CARD", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	@PutMapping
	public ResponseEntity<String> updateCard(@RequestBody Card card){
		ResponseEntity<String> resp = null;
		try {
			cs.updateCard(card);
			resp = new ResponseEntity<>("CARD UPDATED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO UPDATE CARD", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}
	
	@DeleteMapping
	public ResponseEntity<String> deleteCard(@RequestBody Card card){
		ResponseEntity<String> resp = null;
		try {
			cs.deleteCard(card);
			resp = new ResponseEntity<>("CARD DELETED SUCCESSFULLY", HttpStatus.OK);
		} catch (Exception e) {
			resp = new ResponseEntity<>("FAILED TO DELETE CARD", HttpStatus.BAD_REQUEST);
		}
		return resp;
	}

}
