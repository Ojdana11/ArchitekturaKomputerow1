package com.ak1.model;

import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Task {

    @JsonCreator
    public Task(@JsonProperty("id") Integer id,
                @JsonProperty("question") String question,
                @JsonProperty("answer") String answer
                ){
        this.id = id;
        this.answer = answer;
        this.question =question;
    }

    @Id
    private Integer id;
    @JsonView(Views.Public.class)
    private String question;
    @JsonView(Views.Public.class)
    private String answer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }



}
