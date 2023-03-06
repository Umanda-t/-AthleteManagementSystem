package com.example.vitalhubassessment.Repository;

import com.example.vitalhubassessment.Model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {
}
