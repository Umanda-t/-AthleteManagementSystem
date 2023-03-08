package com.example.vitalhubassessment.controller;

import com.example.vitalhubassessment.Model.Result;
import com.example.vitalhubassessment.Service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ResultController {
    @Autowired
    private ResultService resultservice;


    @PostMapping("addResult")
    public Result addResult(@RequestBody Result r){
        return resultservice.saveResult(r);
    }

    @GetMapping("allResult")
    public List<Result> getAllMarks() {
        return this.resultservice.getAllResult();
    }
}
