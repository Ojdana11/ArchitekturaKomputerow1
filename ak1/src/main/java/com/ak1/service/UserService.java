package com.ak1.service;

import com.ak1.model.User;
import java.util.List;

public interface UserService {
    User addUser(User user);
    void delete(User user);
    User getByUsername(String name);
//    User getById(Long id);
    User editUser(User user);
//    List<User> getAll();
    boolean isUserExist(User user);
}