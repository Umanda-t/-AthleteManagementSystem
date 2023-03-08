package com.example.vitalhubassessment.Service;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.Result;
import com.example.vitalhubassessment.Repository.AthleteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AthleteService {
    @Autowired
    private AthleteRepository Repo;
    public Athlete saveAthlete(Athlete a){
        return Repo.save(a);
    }
    public Athlete Find(Long id) {
        return Repo.findById(id).get();
    }

    public List<Athlete> Search(String name, String country, String gender, String event){
        return Repo.findByKeyword(name,country,gender,event);

    }

    public List<Athlete> getAllAthlete(){
        return this.Repo.findAll();
    }
}
