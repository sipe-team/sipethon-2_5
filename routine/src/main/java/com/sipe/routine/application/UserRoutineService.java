package com.sipe.routine.application;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sipe.routine.domain.Routine;
import com.sipe.routine.domain.User;
import com.sipe.routine.domain.UserRoutine;
import com.sipe.routine.domain.repository.RoutineRepository;
import com.sipe.routine.domain.repository.UserRoutineRepository;
import com.sipe.routine.web.dto.RoutineResponse;
import com.sipe.routine.web.dto.UserRoutineRequest;
import com.sipe.routine.web.dto.UserRoutineResponse;

@Service
public class UserRoutineService {
	private final UserRoutineRepository userRoutineRepository;
	private final RoutineRepository routineRepository;

	public UserRoutineService(UserRoutineRepository userRoutineRepository, RoutineRepository routineRepository) {
		this.userRoutineRepository = userRoutineRepository;
		this.routineRepository = routineRepository;
	}

	public List<RoutineResponse> getUserRoutine(User user) {
		return userRoutineRepository.findByUserId(user.getId())
			.stream()
			.map(routine -> RoutineResponse.builder()
				.id(routine.getId())
				.description(routine.getRoutine().getDescription())
				.name(routine.getRoutine().getName())
				.recommendedSeconds(routine.getRoutine().getRecommendedSeconds())
				.build()).toList();
	}

	public UserRoutineResponse createUserRoutine(User user, UserRoutineRequest routineRequest) {
		Routine routine = routineRepository.findByName(routineRequest.getName()).orElse(Routine.builder()
			.recommendedSeconds(routineRequest.getTargetSeconds())
			.name(routineRequest.getName())
			.description(routineRequest.getDescription())
			.build());
		UserRoutine userRoutine = UserRoutine.builder()
			.userId(user.getId()).targetSeconds(routineRequest.getTargetSeconds()).routine(routine).build();

		userRoutineRepository.save(userRoutine);

		return UserRoutineResponse.builder()
			.id(userRoutine.getId())
			.routineId(routine.getId())
			.userId(userRoutine.getUserId())
			.targetSeconds(
				userRoutine.getTargetSeconds())
			.build();
	}
}
