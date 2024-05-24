package com.sipe.routine.exception;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BusinessException extends RuntimeException {
	private ErrorCodeMessage errorCodeMessage;

	public BusinessException(ErrorCodeMessage errorCodeMessage) {
		this.errorCodeMessage = errorCodeMessage;
	}


	public static BusinessException of(ErrorCodeMessage errorCodeMessage) {
		return new BusinessException(errorCodeMessage);
	}
}
