package com.ak1.controller;

import com.ak1.model.Task;
import com.ak1.repository.TaskRepository;
import com.ak1.views.Views;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @JsonView(Views.Public.class)
    @RequestMapping(value = "/allTasks", method = RequestMethod.GET)
    public ResponseEntity<?> login() {
        Iterable<Task> tasks = taskRepository.findAll();
        return new ResponseEntity(tasks,
                HttpStatus.OK);
    }

}
