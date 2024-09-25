// src/main/java/com/BS/BlueStone/common/Wishlists.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.WishlistItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Wishlists extends JpaRepository<WishlistItems, Integer> {
    List<WishlistItems> findByUser_UserId(int userId);
}