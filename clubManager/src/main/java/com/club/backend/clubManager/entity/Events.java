package com.club.backend.clubManager.entity;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "EVENTS")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="title",nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name="startdate", nullable = false)
    private Date startdate;

    @Column(name = "enddate", nullable = false)
    private Date enddate;

    @Column(name="place", nullable = false)
    private String place;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }
}
