package com.revature.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.DAO.UserCardDAO;
import com.revature.DAO.UserCardDAOImpl;
import com.revature.beans.UserCard;

@Service
public class UserCardServiceImpl implements UserCardService {
	
	// instance variables
	private UserCardDAO ucd = new UserCardDAOImpl();

	// service methods
	@Override
	public UserCard getUserCardById(int id) {
		return ucd.getUserCardById(id);
	}

	@Override
	public List<UserCard> getAllUserCards() {
		return ucd.getAllUserCards();
	}

	@Override
	public void addUserCard(UserCard userCard) {
		ucd.addUserCard(userCard);
	}

	@Override
	public boolean updateUserCard(UserCard userCard) {
		return ucd.updateUserCard(userCard);
	}

	@Override
	public void deleteUserCard(UserCard userCard) {
		ucd.deleteUserCard(userCard);
	}
}
