package com.example.vitalhubassessment.Repository;

import com.example.vitalhubassessment.Model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {



}
