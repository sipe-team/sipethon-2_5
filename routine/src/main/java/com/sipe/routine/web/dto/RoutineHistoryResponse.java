package com.sipe.routine.web.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
public class RoutineHistoryResponse {
	private Long id;
	private Long userId;
	private RoutineResponse routine;
	private Long score;
	private Long measuredSeconds;
	private Long targetSeconds;
	private LocalDateTime createdAt;
}
