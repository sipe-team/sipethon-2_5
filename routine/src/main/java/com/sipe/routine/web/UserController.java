package com.sipe.routine.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sipe.routine.application.UserService;
import com.sipe.routine.web.dto.SignInRequest;
import com.sipe.routine.web.dto.SignInResponse;
import com.sipe.routine.web.dto.SignUpRequest;
import com.sipe.routine.web.dto.SignUpResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/user")
@Tag(name = "User", description = "User API")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/signin")
	@Operation(summary = "로그인", description = "email과 password로 로그인을 한다.")
	public ResponseEntity<SignInResponse> signIn(
		@RequestBody SignInRequest signInRequest) {
		return ResponseEntity.ok(userService.signIn(signInRequest));

	}

	@PostMapping("/signup")
	@Operation(summary = "회원가입", description = "회원가입을 한다.")
	public ResponseEntity<SignUpResponse> signIn(
		@RequestBody SignUpRequest signUpRequest) {
		return ResponseEntity.ok(userService.signUp(signUpRequest));

	}
}
