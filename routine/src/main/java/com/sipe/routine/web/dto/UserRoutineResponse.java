package com.sipe.routine.web.dto;

import com.sipe.routine.domain.Routine;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserRoutineResponse {
	private Long id;
	private Long userId;
	private Long routineId;
	private Long targetSeconds;
}
