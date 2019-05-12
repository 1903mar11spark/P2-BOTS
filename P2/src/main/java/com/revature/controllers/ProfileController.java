package com.revature.controllers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ProfileController {
	
	@GetMapping(value="/profile")
	public ModelAndView getProfilePage(@ModelAttribute("username") String username, ModelMap m) {
		
		m.addAttribute("username", username);
		
		return new ModelAndView("profile", m);
	}
	
	/*
	@GetMapping(value = "/login")
	public String getStaticLoginPage() {
		return "forward:/static/login.html";
	}
	*/
	
	@GetMapping(value = "/logout")
	public String logout(HttpSession session, HttpServletRequest request) {
		
		session = request.getSession(false); 
		
		if (session !=null ) {
			session.invalidate();
		}
		
		return "forward:/static/base.html";
	}	
	
}
