package com.ak1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(){
        return "home";
    }
    @GetMapping("/")
    @ResponseBody
    public String index(){
        return "index";
    }
}
