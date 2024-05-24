package com.sipe.routine.application;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.sipe.routine.domain.User;
import com.sipe.routine.domain.repository.UserRepository;
import com.sipe.routine.exception.BusinessException;
import com.sipe.routine.exception.ErrorCodeMessage;
import com.sipe.routine.security.JwtTokenProvider;
import com.sipe.routine.web.dto.SignInRequest;
import com.sipe.routine.web.dto.SignInResponse;
import com.sipe.routine.web.dto.SignUpRequest;
import com.sipe.routine.web.dto.SignUpResponse;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class UserService {

	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;

	public UserService(UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
		this.userRepository = userRepository;
		this.jwtTokenProvider = jwtTokenProvider;
	}

	public SignInResponse signIn(SignInRequest request) {
		User user = userRepository.findByEmail(request.getEmail())
			.orElseThrow(()-> BusinessException.of(ErrorCodeMessage.USER_EMAIL_NOT_FOUND));

		if(!user.checkPassword(request.getPassword())) {
			throw BusinessException.of(ErrorCodeMessage.USER_PASSWORD_NOT_MATCH);
		}

		return SignInResponse.builder()
			.token(jwtTokenProvider.createToken(user.getEmail()))
			.build();
	}

	public SignUpResponse signUp(SignUpRequest request) {
		if(userRepository.findByEmail(request.getEmail()).isPresent()) {
			throw BusinessException.of(ErrorCodeMessage.DUPLICATE_USER_EMAIL);
		}

		User user = User.builder()
			.name(request.getUserName())
			.nickname(request.getNickname())
			.email(request.getEmail())
				.password(request.getPassword())
					.build();

		userRepository.save(user);

		return SignUpResponse.builder().result("success").build();
	}
}
