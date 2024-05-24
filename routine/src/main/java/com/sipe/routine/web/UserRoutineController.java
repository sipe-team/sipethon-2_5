package com.sipe.routine.web;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.routine.application.UserRoutineService;
import com.sipe.routine.config.AuthUser;
import com.sipe.routine.domain.User;
import com.sipe.routine.web.dto.RoutineRequest;
import com.sipe.routine.web.dto.RoutineResponse;
import com.sipe.routine.web.dto.UserRoutineRequest;
import com.sipe.routine.web.dto.UserRoutineResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/user/routine")
@Tag(name = "UserRoutine", description = "User Routine API")
public class UserRoutineController {

	private final UserRoutineService userRoutineService;

	public UserRoutineController(UserRoutineService userRoutineService) {
		this.userRoutineService = userRoutineService;
	}

	@PostMapping("")
	@Operation(summary = "유저 루틴 생성", description = "유저 루틴을 생성")
	public ResponseEntity<UserRoutineResponse> createUserRoutine(@AuthUser User user, @RequestBody UserRoutineRequest routineRequest) {
		UserRoutineResponse userRoutine = userRoutineService.createUserRoutine(user, routineRequest);
		return ResponseEntity.created(URI.create("user/routine/" + userRoutine.getId())).body(userRoutine);
	}

	@GetMapping("")
	@Operation(summary = "유저 루틴 조회", description = "유저 루틴을 조회")
	public ResponseEntity<List<RoutineResponse>> getUserRoutine(@AuthUser User user) {
		return ResponseEntity.ok(userRoutineService.getUserRoutine(user));

	}
}
