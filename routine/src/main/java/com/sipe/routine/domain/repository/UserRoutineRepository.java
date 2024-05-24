package com.sipe.routine.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sipe.routine.domain.UserRoutine;

@Repository
public interface UserRoutineRepository extends JpaRepository<UserRoutine, Long> {
	List<UserRoutine> findByUserId(Long id);
}
