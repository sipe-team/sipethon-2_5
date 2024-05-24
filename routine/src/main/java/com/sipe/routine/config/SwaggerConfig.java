package com.sipe.routine.config;

import java.util.Arrays;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import lombok.RequiredArgsConstructor;

@OpenAPIDefinition(
	info = @Info(title = "ROUTINE API",
		description = "Routine 관리 백 document",
		version = "v1"))
@RequiredArgsConstructor
@Configuration
public class SwaggerConfig {
	@Bean
	public OpenAPI openAPI(){
		String[] paths = {"/**"};

		SecurityScheme securityScheme = new SecurityScheme()
			.type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")
			.in(SecurityScheme.In.HEADER).name("Authorization");
		SecurityRequirement securityRequirement = new SecurityRequirement().addList("Auth");

		return new OpenAPI()
			.components(new Components().addSecuritySchemes("Auth", securityScheme))
			.security(Arrays.asList(securityRequirement));
	}


}
