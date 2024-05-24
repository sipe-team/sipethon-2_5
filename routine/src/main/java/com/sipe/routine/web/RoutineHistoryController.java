package com.sipe.routine.web;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.routine.application.RoutineHistoryService;
import com.sipe.routine.config.AuthUser;
import com.sipe.routine.domain.User;
import com.sipe.routine.web.dto.RoutineHistoryCntResponse;
import com.sipe.routine.web.dto.RoutineHistoryRequest;
import com.sipe.routine.web.dto.RoutineHistoryResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/history/routine")
@Tag(name = "RoutineHistory", description = "Routine History API")
public class RoutineHistoryController {

	private final RoutineHistoryService routineHistoryService;

	public RoutineHistoryController(RoutineHistoryService routineHistoryService) {
		this.routineHistoryService = routineHistoryService;
	}

	@PostMapping("")
	@Operation(summary = "유저 루틴 히스토리 생성", description = "유저 루틴 히스토리를 생성")
	public ResponseEntity<RoutineHistoryResponse> createUserRoutine(@AuthUser User user, @RequestBody RoutineHistoryRequest routineHistoryRequest) {
		RoutineHistoryResponse routineHistory = routineHistoryService.createRoutineHistory(user, routineHistoryRequest);
		return ResponseEntity.created(URI.create("/routine/history/" + routineHistory.getId())).body(routineHistory);
	}

	@GetMapping("")
	@Operation(summary = "유저 루틴 히스토리 리스트 조회", description = "유저 루틴 히스토리 리스트를  조회")
	public ResponseEntity<List<RoutineHistoryCntResponse>> getUserRoutines(@AuthUser User user) {
		return ResponseEntity.ok(routineHistoryService.getRoutineHistory(user));
	}

	@GetMapping("/{routineId}")
	@Operation(summary = "특정 루틴의 유저 루틴 히스토리 리스트 조회", description = "특정 루틴의 유저 루틴 히스토리 리스트를 조회")
	public ResponseEntity<List<RoutineHistoryResponse>> getUserRoutineByRoutine(@AuthUser User user, @PathVariable Long routineId) {
		return ResponseEntity.ok(routineHistoryService.getRoutineHistoryByRoutine(user, routineId));

	}
}

