package com.sipe.routine.application;

import static com.sipe.routine.exception.ErrorCodeMessage.*;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sipe.routine.domain.Routine;
import com.sipe.routine.domain.repository.RoutineRepository;
import com.sipe.routine.exception.BusinessException;
import com.sipe.routine.web.dto.RoutineRequest;
import com.sipe.routine.web.dto.RoutineResponse;

@Service
public class RoutineService {
	private final RoutineRepository routineRepository;

	public RoutineService(RoutineRepository routineRepository) {
		this.routineRepository = routineRepository;
	}

	public List<RoutineResponse> getRoutines() {
		return routineRepository.findAll()
			.stream()
			.map(routine -> RoutineResponse.builder()
				.id(routine.getId())
				.description(routine.getDescription())
				.name(routine.getName())
				.recommendedSeconds(routine.getRecommendedSeconds())
				.build()).toList();
	}

	public RoutineResponse createRoutine(RoutineRequest routineRequest) {
		if (routineRepository.findByName(routineRequest.getName()).isPresent()) {
			throw BusinessException.of(DUPLICATE_ROUTINE);
		}

		Routine routine = Routine.builder()
			.recommendedSeconds(routineRequest.getRecommendedSeconds())
			.name(routineRequest.getName())
			.description(routineRequest.getDescription())
			.build();
		routineRepository.save(routine);

		return RoutineResponse.builder()
			.id(routine.getId())
			.recommendedSeconds(routine.getRecommendedSeconds())
			.name(routine.getName())
			.description(routine.getDescription())
			.build();
	}
}
