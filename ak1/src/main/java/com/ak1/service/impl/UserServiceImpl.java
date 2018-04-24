package com.ak1.service.impl;


import com.ak1.model.User;
import com.ak1.repository.UserRepository;
import com.ak1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User addUser(User tag) {
        User savedBank = userRepository.save(tag);

        return savedBank;
    }

    @Override
    public void delete(User user) {
        userRepository.delete(user);
    }

    @Override
    public User getByUsername(String name) {
        return userRepository.findByUsername(name);
    }

//    @Override
//    public User getById(User user) {
//        return userRepository.findById(user);
//    }

    @Override
    public User editUser(User user) {
        return userRepository.save(user);
    }

//    @Override
//    public List<User> getAll() {
//        return userRepository.findAll();
//    }

    @Override
    public boolean isUserExist(User user) { return getByUsername(user.getSurname()) != null; };
}
