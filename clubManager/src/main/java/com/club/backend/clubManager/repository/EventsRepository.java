package com.club.backend.clubManager.repository;

import com.club.backend.clubManager.entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends JpaRepository<Events,Integer> {
}
