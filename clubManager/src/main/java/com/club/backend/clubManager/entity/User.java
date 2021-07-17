package com.club.backend.clubManager.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    @Column(name = "id")
    private Integer id;

    @Column(name = "uuid", nullable = false)
    private String uuid;

    @Column(name = "firstname", nullable = false)
    private String FirstName;

    @Column(name = "lastname", nullable = false)
    private String LastName;

    @Column(name = "username", nullable = false)
    private String UserName;

    @Column(name = "email", nullable = false)
    private String email;

    //@JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "dob", nullable = false)
    private java.sql.Date dob;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "contactnumber", nullable = false)
    private String contactNumber;

    @Column(name="salt", nullable = false)
    private String salt;

    public String getSalt(){
        return this.salt;
    }
    public void setSalt(String salt){ this.salt = salt;}
    /**
     * get field @Column(name = "uuid", nullable = false)
     *
     * @return uuid @Column(name = "uuid", nullable = false)

     */
    public String getUuid() {
        return this.uuid;
    }

    /**
     * set field @Column(name = "uuid", nullable = false)
     *
     * @param uuid @Column(name = "uuid", nullable = false)

     */
    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    /**
     * get field @Column(name = "firstName", nullable = false)
     *
     * @return firstName @Column(name = "firstName", nullable = false)

     */
    public String getFirstName() {
        return this.FirstName;
    }

    /**
     * set field @Column(name = "firstName", nullable = false)
     *
     * @param firstName @Column(name = "firstName", nullable = false)

     */
    public void setFirstName(String firstName) {
        this.FirstName = firstName;
    }

    /**
     * get field @Column(name = "lastName", nullable = false)
     *
     * @return lastName @Column(name = "lastName", nullable = false)

     */
    public String getLastName() {
        return this.LastName;
    }

    /**
     * set field @Column(name = "lastName", nullable = false)
     *
     * @param lastName @Column(name = "lastName", nullable = false)

     */
    public void setLastName(String lastName) {
        this.LastName = lastName;
    }

    /**
     * get field @Column(name = "userName", nullable = false)
     *
     * @return userName @Column(name = "userName", nullable = false)

     */
    public String getUserName() {
        return this.UserName;
    }

    /**
     * set field @Column(name = "userName", nullable = false)
     *
     * @param userName @Column(name = "userName", nullable = false)

     */
    public void setUserName(String userName) {
        this.UserName = userName;
    }

    /**
     * get field @Column(name = "email", nullable = false)
     *
     * @return email @Column(name = "email", nullable = false)

     */
    public String getEmail() {
        return this.email;
    }

    /**
     * set field @Column(name = "email", nullable = false)
     *
     * @param email @Column(name = "email", nullable = false)

     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * get field @Column(name = "password", nullable = false)
     *
     * @return password @Column(name = "password", nullable = false)

     */
    public String getPassword() {
        return this.password;
    }

    /**
     * set field @Column(name = "password", nullable = false)
     *
     * @param password @Column(name = "password", nullable = false)

     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * get field @Column(name = "dob", nullable = false)
     *
     * @return dob @Column(name = "dob", nullable = false)

     */
    public Date getDob() {
        return this.dob;
    }

    /**
     * set field @Column(name = "dob", nullable = false)
     *
     * @param dob @Column(name = "dob", nullable = false)

     */
    public void setDob(Date dob) {
        this.dob = dob;
    }

    /**
     * get field @Column(name = "role", nullable = false)
     *
     * @return role @Column(name = "role", nullable = false)

     */
    public String getRole() {
        return this.role;
    }

    /**
     * set field @Column(name = "role", nullable = false)
     *
     * @param role @Column(name = "role", nullable = false)

     */
    public void setRole(String role) {
        this.role = role;
    }

    /**
     * get field @Column(name = "contactNumber", nullable = false)
     *
     * @return contactNumber @Column(name = "contactNumber", nullable = false)

     */
    public String getContactNumber() {
        return this.contactNumber;
    }

    /**
     * set field @Column(name = "contactNumber", nullable = false)
     *
     * @param contactNumber @Column(name = "contactNumber", nullable = false)

     */
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}