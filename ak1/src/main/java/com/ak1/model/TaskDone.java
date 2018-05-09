package com.ak1.model;

import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TaskDone {

    @JsonCreator
    public TaskDone(@JsonProperty("task_id") Integer task_id,
                @JsonProperty("user_id") Integer user_id,
                @JsonProperty("status") Integer status
    ){
        this.task_id = task_id;
        this.user_id = user_id;
        this.status =status;
    }

    @Id
    private Integer task_id;
    @JsonView(Views.Public.class)
    private Integer user_id;
    @JsonView(Views.Public.class)
    private Integer status;

    public Integer getTask_id() {
        return task_id;
    }

    public void setTask_id(Integer task_id) {
        this.task_id = task_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

}
