package com.club.backend.clubManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.club.backend"})

public class ClubManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubManagerApplication.class, args);
	}

}
