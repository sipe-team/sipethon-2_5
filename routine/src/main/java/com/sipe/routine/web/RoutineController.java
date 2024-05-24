package com.sipe.routine.web;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.routine.application.RoutineService;
import com.sipe.routine.config.AuthUser;
import com.sipe.routine.domain.User;
import com.sipe.routine.web.dto.RoutineRequest;
import com.sipe.routine.web.dto.RoutineResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/routine")
@Tag(name = "Routine", description = "Routine API")
public class RoutineController {

	private final RoutineService routineService;

	public RoutineController(RoutineService routineService) {
		this.routineService = routineService;
	}

	@PostMapping("")
	@Operation(summary = "루틴 생성", description = "루틴을 생성")
	public ResponseEntity<RoutineResponse> createRoutine(@RequestBody RoutineRequest routineRequest) {
		RoutineResponse routine = routineService.createRoutine(routineRequest);
		return ResponseEntity.created(URI.create("routine/" + routine.getId())).body(routine);
	}

	@GetMapping("")
	@Operation(summary = "루틴 조회", description = "루틴을 조회")
	public ResponseEntity<List<RoutineResponse>> getRoutine() {
		return ResponseEntity.ok(routineService.getRoutines());
	}
}
