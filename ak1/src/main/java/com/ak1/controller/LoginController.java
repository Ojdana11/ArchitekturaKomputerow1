package com.ak1.controller;


import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @RequestMapping(value ="/login", method = RequestMethod.GET)
    @ResponseBody
    public String login()
    {

        return "tu będzie formularz logowania";
    }

    //Może być niepotrzebne. możliwe że domyślnie jest to już zdefiniowane w spring security
    @RequestMapping(value ="/login", method = RequestMethod.POST)
    public String login(RequestParam HttpRequest){


        return "status logowania";
    }
}
