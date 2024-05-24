package com.sipe.routine.config;

import static com.sipe.routine.exception.ErrorCodeMessage.*;

import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.sipe.routine.domain.User;
import com.sipe.routine.domain.repository.UserRepository;
import com.sipe.routine.exception.BusinessException;
import com.sipe.routine.exception.RoutineAuthorizationException;
import com.sipe.routine.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class AuthUserResolver implements HandlerMethodArgumentResolver {

	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;

	public AuthUserResolver(UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
		this.userRepository = userRepository;
		this.jwtTokenProvider = jwtTokenProvider;
	}

	@Override
	public boolean supportsParameter(MethodParameter parameter) {
		boolean hasAnnotation = parameter.hasParameterAnnotation(AuthUser.class);
		boolean isMemberType = User.class.isAssignableFrom(parameter.getParameterType());

		return hasAnnotation && isMemberType;
	}

	@Override
	public User resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
		String authorizationHeader = webRequest.getHeader("Authorization");
		log.info("Authorization Header ::: " + authorizationHeader);

		if (authorizationHeader == null) {
			throw new BusinessException(UNAUTHORIZATION);
		}

		String jwtToken = authorizationHeader.substring(7);

		return userRepository.findByEmail(jwtTokenProvider.getUserPk(jwtToken)).orElseThrow(
			() -> RoutineAuthorizationException.of(UNAUTHORIZATION)
		);
	}
}
