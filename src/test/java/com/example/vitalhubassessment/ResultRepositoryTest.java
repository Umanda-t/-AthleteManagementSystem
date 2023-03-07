package com.example.vitalhubassessment;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.Result;
import com.example.vitalhubassessment.Repository.AthleteRepository;
import com.example.vitalhubassessment.Repository.ResultRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ResultRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ResultRepository repo;

    @Autowired
    private AthleteRepository athleterepo;
    @Test
    public void testCreate() {
        Athlete a=entityManager.find(Athlete.class,1L);
        Result o = new Result();
        o.setAthlete(a);
        o.setResult("2nd Place");

        Result saved = repo.save(o);

        Result exist = entityManager.find(Result.class, saved.getId());

        assertThat(o.getId()).isEqualTo(exist.getId());

    }
}
