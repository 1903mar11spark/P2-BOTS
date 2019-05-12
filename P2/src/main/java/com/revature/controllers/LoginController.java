package com.revature.controllers;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.model.Credentials;
import com.revature.model.UserLogging;
import com.revature.service.AdminAuthService;
import com.revature.service.AuthService;
import com.revature.service.UserService;

@Controller
public class LoginController {

	// instance variable - Http session variable to track session from back end &
	// authorization services
	private HttpSession session;
	private AuthService as = new AuthService();
	private AdminAuthService aas = new AdminAuthService();
	
	// setter injection
	@Autowired //idea is to make use HttpSession session to add session scoped attributes
	public void setHttpSession(HttpSession session) {
		this.session = session;
	}
	@Autowired 
	public void setAuthService(AuthService as) {
		this.as = as;
	}
	@Autowired 
	public void setAdminAuthService(AdminAuthService aas) {
		this.aas = aas;
	}

	//methods 
	// deliver static resources from endpoint "/login"
	@GetMapping(value = "/login")
	public String getStaticLoginPage() {
		return "forward:/static/login.html";
	}

	// handle form data sent to "/login"
	@PostMapping(value = "/login", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
	public RedirectView handleFormRequest(@RequestBody MultiValueMap<String, String> formParams,
			RedirectAttributes attributes) {

		
		// this for jsp page if we use
		attributes.addFlashAttribute("username", formParams.getFirst("username"));
		attributes.addFlashAttribute("password", formParams.getFirst("password"));

		// grabbing form data for some authentication
		// session.setAttribute(name, value);
		session.setAttribute("username", formParams.getFirst("username"));
		session.setAttribute("password", formParams.getFirst("password"));

		// grab credentials from the request
		Credentials creds = new Credentials(session.getAttribute("username").toString(), session.getAttribute("password").toString());

		//attempt to authenticate user 
		UserLogging ul = as.isValidUser(creds); 
		
		if (ul != null) {
			
			//session attributes as the user information - session refers to the application session
			session.setAttribute("userId", ul.getId());
			session.setAttribute("username", ul.getUsername());
			session.setAttribute("firstname", ul.getFirstname());
			session.setAttribute("lastname", ul.getLastname());
			session.setAttribute("email", ul.getEmail());
			session.setAttribute("problem", null);
			
			//check if they are a manager  and set attributes for session and jsp page
			//two ways to get the same info - attribute manager = true for managers or userType = manager for managers
			if (aas.isAnAdmin(creds) == true) {
				session.setAttribute("manager", true);
				session.setAttribute("usertype", "admin");
			} else {
			//
			session.setAttribute("manager", false);
			session.setAttribute("usertype", "standard");
			}
			
			//case of user loggin authenticated and admin status set for session
			return new RedirectView("profile");

		
		//case of user logging not found in DB
		} else {
			
			session.setAttribute("problem", "invalid credentials");	
			//otherwise redirect to the login page 
			return new RedirectView("login");

		}
		
	}

	@GetMapping(value = "/sessionUser")
	ResponseEntity<UserLogging> returnUserLogging(HttpSession session) {
		
		UserLogging userLogging = new UserLogging(Integer.parseInt(session.getAttribute("userId").toString()), session.getAttribute("username").toString(), session.getAttribute("firstname").toString(), session.getAttribute("lastname").toString(), session.getAttribute("lastname").toString(), session.getAttribute("usertype").toString()); 
		
	    return new ResponseEntity<>(userLogging, HttpStatus.OK);
	    
	}
	/*
	public String getSessionUser(HttpSession session, HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		session = request.getSession(false);
		
		if (session != null && session.getAttribute("username") != null) {
			try {
				int userId = Integer.parseInt(session.getAttribute("userId").toString()); 
				String username = session.getAttribute("username").toString();
				String firstname = session.getAttribute("firstname").toString();
				String lastname = session.getAttribute("lastname").toString();
				String email = session.getAttribute("email").toString();
				UserLogging ul = new UserLogging(userId, username, firstname, lastname, email); 
				
				response.getWriter().write((new ObjectMapper()).writeValueAsString(ul));
				
				
			} catch (Exception e) {
				e.printStackTrace();
				response.getWriter().write("{\"session\":null}");
			}
		} else {
			response.getWriter().write("{\"session\":null}"); 
		}
		return "forward:/static/login.html";
	}
	*/
	
}
