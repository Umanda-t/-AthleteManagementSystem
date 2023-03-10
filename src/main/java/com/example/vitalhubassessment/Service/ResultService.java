package com.example.vitalhubassessment.Service;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.Result;
import com.example.vitalhubassessment.Repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    @Autowired
    private ResultRepository Repo;
    public Result saveResult(Result a){
        return Repo.save(a);
    }
    public List<Result> getAllResult(){
        return this.Repo.findAll();
    }
    public List<Result> Search(String name, String country, String gender, String event){
        return Repo.findByKeyword(name,country,gender,event);

    }
}
