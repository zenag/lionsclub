package com.club.backend.clubManager.repository;

import com.club.backend.clubManager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository<T> extends JpaRepository<User,Integer> {

    List<User> findByContactNumberAndRole(String ContactNumber, String role);
}