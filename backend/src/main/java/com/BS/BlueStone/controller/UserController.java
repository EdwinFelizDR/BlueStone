package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.UserRepo;
import com.BS.BlueStone.model.Users;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepo userRepo;

    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/users")
    public ResponseEntity<List<Users>> getUsers(){
        List<Users> users = userRepo.findAll();
        return ResponseEntity.ok(users);
    }

    @PostMapping("/createuser")
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        if (user.getPasswordHash() == null || user.getPasswordHash().isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }
        Users savedUser = userRepo.save(user);
        return ResponseEntity.status(201).body(savedUser);
    }

    @GetMapping("/checkuser")
    public ResponseEntity<Boolean> checkUserExists(@RequestParam String email) {
        boolean exists = userRepo.existsByEmail(email);
        return ResponseEntity.ok(exists);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestParam String email, @RequestParam String password) {
        Users user = userRepo.findByEmail(email);
        if (user == null || !user.getPasswordHash().equals(password)) {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }
        return ResponseEntity.ok(user);
    }

}
