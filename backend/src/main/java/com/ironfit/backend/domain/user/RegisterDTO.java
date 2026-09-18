// RegisterDTO.java
package com.ironfit.backend.domain.user;
public record RegisterDTO(String email, String password, UserRole role) { }