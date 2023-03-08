package com.example.vitalhubassessment.Repository;

import com.example.vitalhubassessment.Model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Long> {
    @Query("SELECT a FROM Result a WHERE (a.athlete.firstname=:name OR a.athlete.lastname=:name) AND a.athlete.gender=:gender AND a.athlete.country=:country  AND a.athlete.event=:event")
    public List<Result> findByKeyword(String name, String country, String gender, String event);
}
