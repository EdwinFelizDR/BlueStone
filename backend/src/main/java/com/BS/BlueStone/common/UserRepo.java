package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer> {
    Users findByUserId(int userId);
    Users findByEmail(String email);

    boolean existsByEmail(String email);
}
