package com.sipe.routine.application;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sipe.routine.domain.Routine;
import com.sipe.routine.domain.RoutineHistory;
import com.sipe.routine.domain.User;
import com.sipe.routine.domain.repository.RoutineHistoryRepository;
import com.sipe.routine.domain.repository.RoutineRepository;
import com.sipe.routine.web.dto.RoutineHistoryRequest;
import com.sipe.routine.web.dto.RoutineHistoryResponse;
import com.sipe.routine.web.dto.RoutineResponse;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class RoutineHistoryService {
	private final RoutineHistoryRepository routineHistoryRepository;
	private final RoutineRepository routineRepository;

	public RoutineHistoryService(RoutineHistoryRepository routineHistoryRepository, RoutineRepository routineRepository) {
		this.routineHistoryRepository = routineHistoryRepository;
		this.routineRepository = routineRepository;
	}

	public RoutineHistoryResponse createRoutineHistory(User user, RoutineHistoryRequest routineHistoryRequest) {
		log.info("user id : {}", user.getId());
		Routine routine = routineRepository.findByName(routineHistoryRequest.getRoutineName()).orElse(Routine.builder()
			.recommendedSeconds(routineHistoryRequest.getTargetSeconds())
			.name(routineHistoryRequest.getRoutineName())
			.description(routineHistoryRequest.getRoutineName())
			.build());

		RoutineHistory routineHistory = RoutineHistory.builder()
			.user(user)
			.routine(routine)
			.targetSeconds(routineHistoryRequest.getTargetSeconds())
			.measuredSeconds(routineHistoryRequest.getMeasuredSeconds())
			.score(routineHistoryRequest.getScore())
			.build();

		routineHistoryRepository.save(routineHistory);

		return RoutineHistoryResponse.builder().id(routineHistory.getId())
			.id(routineHistory.getId())
			.routine(RoutineResponse.builder()
				.id(routineHistory.getRoutine().getId())
				.recommendedSeconds(routineHistory.getRoutine().getRecommendedSeconds())
				.name(routineHistory.getRoutine().getName())
				.description(routineHistory.getRoutine().getDescription())
				.build())
			.userId(routineHistory.getUser().getId())
			.targetSeconds(routineHistory.getTargetSeconds())
			.measuredSeconds(routineHistory.getMeasuredSeconds())
			.score(routineHistory.getScore())
			.build();
	}

	public List<RoutineHistoryResponse> getRoutineHistory(User user) {
		return routineHistoryRepository.findAllByUserId(user.getId(), Sort.by(Sort.Direction.DESC, "createdAt"))
			.stream()
			.map(
				routineHistory -> RoutineHistoryResponse.builder().id(routineHistory.getId())
					.routine(RoutineResponse.builder()
						.id(routineHistory.getRoutine().getId())
						.recommendedSeconds(routineHistory.getRoutine().getRecommendedSeconds())
						.name(routineHistory.getRoutine().getName())
						.description(routineHistory.getRoutine().getDescription())
						.build())
					.userId(routineHistory.getUser().getId())
					.targetSeconds(routineHistory.getTargetSeconds())
					.measuredSeconds(routineHistory.getMeasuredSeconds())
					.score(routineHistory.getScore())
					.build())
			.toList();
	}
}
