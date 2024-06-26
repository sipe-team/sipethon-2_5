package com.sipe.routine.security;

import java.util.Base64;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Component
public class JwtTokenProvider {

	@Value("${spring.jwt.secret}")
	private String secretKey;

	// 토큰 유효시간 30분
	private long tokenValidTime = 30 * 60 * 1000L;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}

	// JWT 토큰 생성
	public String createToken(String email) {
		Claims claims = Jwts.claims().setSubject(email); // JWT payload 에 저장되는 정보단위
		Date now = new Date();
		return Jwts.builder()
			.setClaims(claims) // 정보 저장
			.setIssuedAt(now) // 토큰 발행 시간 정보
			.setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
			.signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과
			.compact();
	}

	// 토큰에서 회원 정보 추출
	public String getUserPk(String token) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
	}

	// Request의 Header에서 token 값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN값'
	public String resolveToken(HttpServletRequest request) {
		return request.getHeader("Authorization");
	}

	// 토큰의 유효성 + 만료일자 확인
	public boolean validateToken(String jwtToken) {
		try {
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
			return !claims.getBody().getExpiration().before(new Date());
		} catch (Exception e) {
			return false;
		}
	}
}
