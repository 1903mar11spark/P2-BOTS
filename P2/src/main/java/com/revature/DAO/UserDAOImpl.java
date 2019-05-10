package com.revature.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.revature.beans.User;
import com.revature.util.ConnectionUtil;


public class UserDAOImpl implements UserDAO {

	// variables
	private SessionFactory sf = ConnectionUtil.getSessionFactory();
	
	//methods
	@Override
	public User getUserById(int id) {
		User u = null; 
		try (Session s = sf.getCurrentSession()) {
			Transaction tx = s.beginTransaction(); 
			u = s.get(User.class,  id); 
			tx.commit();
		}
		return u; 
	}

	@Override
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>(); 
		//use a Query to retrieve all users
		try (Session s = sf.getCurrentSession()) {
			Transaction tx = s.beginTransaction(); 
			users = s.createQuery("from User").getResultList(); 
			tx.commit();
			s.close();
		}
		return users; 
	}

	@Override
	public boolean updateUser(User user) {
		//this is awesome. We use session and the hibernate methods here 
		//and NOT JDBC's connection and other interfaces. 
		try(Session s = sf.getCurrentSession()) {
			Transaction tx = s.beginTransaction(); 
			s.update(user);
			tx.commit(); 
			return true; 
		} catch (Exception e) {
			return false; 
		}
		
	}

	@Override
	public void addUser(User user) {
		try (Session s = sf.getCurrentSession()) {
			Transaction tx = s.beginTransaction(); 
			s.persist(user);
			tx.commit();
			s.close();
		}
	}

	@Override
	public void deleteUser(User user) {
		try (Session s = sf.getCurrentSession()) {
			Transaction tx = s.beginTransaction(); 
			s.delete(user); 
			tx.commit(); 
			s.close(); 
		}
	}

}
