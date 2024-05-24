package com.sipe.routine.web.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class RoutineHistoryCntResponse {
	private RoutineResponse routine;
	private Long cnt;
}
