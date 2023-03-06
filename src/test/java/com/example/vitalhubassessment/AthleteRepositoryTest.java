package com.example.vitalhubassessment;


import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Repository.AthleteRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class AthleteRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private AthleteRepository repo;
    @Test
    public void testCreate() {
        Athlete o = new Athlete();
        o.setFirstname("Anne");
        o.setLastname("Smith");
        o.setCountry("USA");
        o.setGender("Female");
        o.setDob("1998-11-07");
        o.setEvent("100m");
        Athlete saved = repo.save(o);

        Athlete existBook = entityManager.find(Athlete.class, saved.getId());

        assertThat(o.getId()).isEqualTo(existBook.getId());

    }
}
