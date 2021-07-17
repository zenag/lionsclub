package com.club.backend.clubManager.repository;

import com.club.backend.clubManager.entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth,Integer> {

}
