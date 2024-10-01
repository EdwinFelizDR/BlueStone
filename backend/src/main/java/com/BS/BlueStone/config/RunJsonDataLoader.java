package com.BS.BlueStone.config;

import com.BS.BlueStone.common.UserRepo;
import com.BS.BlueStone.model.Users;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final UserRepo userRepo;
    private final ObjectMapper objectMapper;
    private final PasswordEncoder passwordEncoder;

    public RunJsonDataLoader(UserRepo userRepo, ObjectMapper objectMapper, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.objectMapper = objectMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        loadUserData();
    }

    private void loadUserData() {
        if (userRepo.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
                List<Users> users = objectMapper.readValue(inputStream, new TypeReference<List<Users>>() {});
                for (Users user : users) {
                    user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
                }
                logger.info("Users data loaded successfully {}", users);
                userRepo.saveAll(users);
            } catch (IOException e) {
                throw new RuntimeException("Error loading users data: ", e);
            }
        } else {
            logger.info("Users data already loaded");
        }
    }
}