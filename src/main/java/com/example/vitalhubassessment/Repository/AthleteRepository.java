package com.example.vitalhubassessment.Repository;

import com.example.vitalhubassessment.Model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {

//    @Query("SELECT a FROM Athlete a WHERE (a.firstname=:name OR a.lastname=:name) AND a.country=:country AND a.gender=:gender AND a.event=:event")
//    public List<Athlete> findByKeyword(String name,String country, String gender, String event);

//    @Query("SELECT a FROM Athlete a WHERE a.firstname=:name OR a.lastname=:name OR a.country=:country OR a.gender=:gender OR a.event=:event")
//    public List<Athlete> findByKeyword(String name,String country, String gender, String event);

}
