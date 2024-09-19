// src/main/java/com/BS/BlueStone/common/Shopping_CartRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Shopping_Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Shopping_CartRepo extends JpaRepository<Shopping_Cart, Integer> {
    List<Shopping_Cart> findByUser_UserId(int userId);
}