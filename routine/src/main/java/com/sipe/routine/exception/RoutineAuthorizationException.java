package com.sipe.routine.exception;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RoutineAuthorizationException extends BusinessException {
	public RoutineAuthorizationException(ErrorCodeMessage errorCodeMessage) {
		super(errorCodeMessage);
	}

	public static RoutineAuthorizationException of(ErrorCodeMessage errorCodeMessage) {
		return new RoutineAuthorizationException(errorCodeMessage);
	}
}
