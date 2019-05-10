package com.revature.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class LoginController {
	
	// deliver static resources from endpoint "/login"
	@GetMapping(value="/login")
	public String getStaticLoginPage() {
		return "forward:/static/login.html";
	}
	
	// handle form data sent to "/login"
	@PostMapping(value="/login", consumes=MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public RedirectView handleFormRequest(@RequestBody MultiValueMap<String, String> formParams, RedirectAttributes attributes) {
		attributes.addFlashAttribute("username", formParams.getFirst("username"));
		
		// could grab password, do some authentication
		
		return new RedirectView("profile");
	}

}
