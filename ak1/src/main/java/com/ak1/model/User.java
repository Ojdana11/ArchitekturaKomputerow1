package com.ak1.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.ak1.views.Views;

@Entity // This tells Hibernate to make a table out of this class
public class User {

    public User() {
    }

    @JsonCreator
    public User(@JsonProperty("firstname") String firstname,
                @JsonProperty("lastname")  String lastname,
                @JsonProperty("email") String email,
                @JsonProperty("password") String password,
                @JsonProperty("id") Integer id) {
        this.firstname = firstname;

        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    @Id
    private Integer id;
    @JsonView(Views.Public.class)
    private String firstname;
    @JsonView(Views.Public.class)
    private String lastname;
    @JsonView(Views.Public.class)
    private String email;
    @JsonView(Views.Public.class)
    private String password;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSurname(){
        return lastname;
    }
    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
