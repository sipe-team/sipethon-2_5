package com.sipe.routine.web.dto;

import io.swagger.v3.oas.annotations.Parameter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
public class RoutineHistoryRequest {
	@Parameter(name = "루틴 이름", example = "목욕")
	private String routineName;
	private Long targetSeconds;
	private Long measuredSeconds;
	private Long score;
}
