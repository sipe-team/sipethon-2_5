package com.sipe.routine.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.sipe.routine.web.dto.ErrorResponse;

@RestControllerAdvice
public class ControllerAdvice {

	@ExceptionHandler({BusinessException.class})
	public ResponseEntity<ErrorResponse> handleRuntimeException(BusinessException exception) {
		return ResponseEntity.badRequest().body(ErrorResponse.builder()
			.code(exception.getErrorCodeMessage().getCode())
			.message(exception.getErrorCodeMessage().getMessage())
			.build());
	}

	@ExceptionHandler({RoutineAuthorizationException.class})
	public ResponseEntity<ErrorResponse> handleRuntimeException(RoutineAuthorizationException exception) {
		return new ResponseEntity<>(ErrorResponse.builder()
			.code(exception.getErrorCodeMessage().getCode())
			.message(exception.getErrorCodeMessage().getMessage())
			.build(),
			HttpStatus.UNAUTHORIZED);
	}
}
