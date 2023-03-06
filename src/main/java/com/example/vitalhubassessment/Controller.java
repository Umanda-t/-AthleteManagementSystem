package com.example.vitalhubassessment;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.ProfileImage;
import com.example.vitalhubassessment.Service.AthleteService;
import com.example.vitalhubassessment.Service.ProfileImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.io.IOException;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {
    @Autowired
    private AthleteService athleteservice;

    @Autowired
    private ProfileImageService imageservice;

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

    @PostMapping("addImage")
    public ResponseEntity<ProfileImage> uploadProfileImage(
            @RequestParam("image") MultipartFile File,@RequestParam("id") Long id)
            throws IOException {
        Athlete o= athleteservice.Find(id);
        return new ResponseEntity<>(imageservice.uploadImage(File,o), HttpStatus.OK);
    }



}
