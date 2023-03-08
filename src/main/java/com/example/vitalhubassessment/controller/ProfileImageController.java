package com.example.vitalhubassessment.controller;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.ProfileImage;
import com.example.vitalhubassessment.Service.AthleteService;
import com.example.vitalhubassessment.Service.ProfileImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProfileImageController {
    @Autowired
    private ProfileImageService imageservice;
    @Autowired
    private AthleteService athleteservice;

    @PostMapping("addImage")
    public ResponseEntity<ProfileImage> uploadProfileImage(@RequestParam("id") Long id,@RequestParam("image") MultipartFile File)
            throws IOException {
        Athlete o= athleteservice.Find(id);
        return new ResponseEntity<>(imageservice.uploadImage(File,o), HttpStatus.OK);
    }


}
