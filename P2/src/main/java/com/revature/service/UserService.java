package com.revature.service;

import java.util.List;

import com.revature.beans.User;

public interface UserService {

	public User getUserById(int id); 
	
	public List<User> getAllUsers(); 
	
	public void addUser(User user); 
	
	public boolean updateUser(User user); 
	
	public void deleteUser(User user); 

}
