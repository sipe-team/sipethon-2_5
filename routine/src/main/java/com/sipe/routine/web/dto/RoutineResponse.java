package com.sipe.routine.web.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoutineResponse {
	private Long id;
	private String name;
	private String description;
	private Long recommendedSeconds;

}
