package com.sipe.routine.application;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api")
@Tag(name = "Routine", description = "Routine API")
public class RoutineController {

	@GetMapping("/hello")
	@Operation(summary = "루틴 조회", description = "루틴을 조회")
	public ResponseEntity<String> getHi(
		@Parameter(description = "유저ID", required = true) @RequestParam("userId") Long userId) {
		return ResponseEntity.ok("hi");

	}
}
