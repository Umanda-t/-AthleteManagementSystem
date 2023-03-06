package com.example.vitalhubassessment;

import com.example.vitalhubassessment.Model.Athlete;
import com.example.vitalhubassessment.Model.ProfileImage;
import com.example.vitalhubassessment.Repository.AthleteRepository;
import com.example.vitalhubassessment.Repository.ProfileImageRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

public class ProfileImageRepositoryTest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ProfileImageRepository repo;
    @Test
    public void testCreate() {
        Athlete a=entityManager.find(Athlete.class,1);
        ProfileImage o = new ProfileImage();
        o.setAid(a);
        o.setDownloadUri("/downloadFile/AE7GPzg1");
        o.setFileName("Photo.jpg");
        o.setSize(13573);

        ProfileImage saved = repo.save(o);

        ProfileImage existBook = entityManager.find(ProfileImage.class, saved.getId());

        assertThat(o.getId()).isEqualTo(existBook.getId());

    }
}
