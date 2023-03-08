package com.example.vitalhubassessment.controller;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Service.AthleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AthleteController {
    @Autowired
    private AthleteService athleteservice;
    @PostMapping("addAthlete")
    public Long AddAthlete(@RequestBody Map<String, Object> payload) {
        Athlete athlete=new Athlete();
        String firstname= String.valueOf(payload.get("firstname"));
        String lastname= String.valueOf(payload.get("lastname"));;
        String gender=String.valueOf(payload.get("gender"));;
        String dob=String.valueOf(payload.get("dob"));;
        String country=String.valueOf(payload.get("country"));
        String event=String.valueOf(payload.get("event"));

        athlete.setFirstname(firstname);
        athlete.setLastname(lastname);
        athlete.setGender(gender);
        athlete.setDob(dob);
        athlete.setCountry(country);
        athlete.setEvent(event);

        athleteservice.saveAthlete(athlete);
        return athlete.getId();

    }

    @PutMapping("/updateAthlete/{id}")
    public ResponseEntity<?> update(@RequestBody Athlete athlete, @PathVariable Long id) {
        try {
            Athlete o=athleteservice.Find(id);
            Long athleteid = o.getId();
            if(athleteid!=0) {
                athlete.setId(id);
                athleteservice.saveAthlete(athlete);
            }
            return new ResponseEntity<>(athlete, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("allAthlete")
    public List<Athlete> getAllAthlete() {
        return this.athleteservice.getAllAthlete();
    }

//    @GetMapping("search/{name}/{country}/{gender}/{event}")
//    public List<Athlete> getAthlete(@PathVariable String name, @PathVariable String country,
//                                         @PathVariable String gender, @PathVariable String event) {
//
//
//        return this.athleteservice.Search(name,country,gender,event);
//    }
}
