package com.ak1.repository;

import com.ak1.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("select t from User t where t.lastname = :lastname")
    User findByUsername(@Param("lastname") String username);

    @Query("select t from User t where t.email = :email")
    User findByEmail(@Param("email") String email);

}
