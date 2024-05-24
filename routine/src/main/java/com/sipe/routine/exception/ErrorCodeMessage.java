package com.sipe.routine.exception;

import lombok.Getter;

@Getter
public enum ErrorCodeMessage {
	DUPLICATE_USER_EMAIL(1L, "중복된 유저 이메일입니다."),
	USER_EMAIL_NOT_FOUND(2L, "존재하지 않는 이메일입니다."),
	USER_PASSWORD_NOT_MATCH(3L, "잘못된 비밀번호입니다."),
	UNAUTHORIZATION(4L, "인증되지 않는 사용자입니다."),
	DUPLICATE_ROUTINE(5L, "중복된 루틴입니다."),
	ROUTINE_NOT_FOUND(2L, "존재하지 않는 루틴입니다.");



	private final Long code;
	private final String message;

	ErrorCodeMessage(Long code, String message) {
		this.code = code;
		this.message = message;
	}
}
