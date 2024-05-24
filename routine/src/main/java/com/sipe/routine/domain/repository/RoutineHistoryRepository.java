package com.sipe.routine.domain.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sipe.routine.domain.Routine;
import com.sipe.routine.domain.RoutineHistory;

@Repository
public interface RoutineHistoryRepository extends JpaRepository<RoutineHistory, Long> {
	List<RoutineHistory> findAllByUserId(Long id, Sort createdAt);

	List<RoutineHistory> findAllByUserIdAndRoutine(Long id, Routine routine, Sort createdAt);

	List<RoutineHistory> findAllDistinctRoutineByUserId(Long id, Sort createdAt);
}
