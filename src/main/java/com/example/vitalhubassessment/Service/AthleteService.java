package com.example.vitalhubassessment.Service;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Repository.AthleteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
