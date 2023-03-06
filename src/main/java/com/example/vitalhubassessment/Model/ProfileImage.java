package com.example.vitalhubassessment.Model;

import javax.persistence.*;

@Entity
@Table(name = "Image")
public class ProfileImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "AthleteID")
    private Athlete aid;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false)
    private String downloadUri;

    @Column(nullable = false)
    private long size;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getDownloadUri() {
        return downloadUri;
    }

    public void setDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }

    public Athlete getAid() {
        return aid;
    }

    public void setAid(Athlete aid) {
        this.aid = aid;
    }
}
