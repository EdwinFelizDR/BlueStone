// src/main/java/com/BS/BlueStone/common/Wishlist_ItemsRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Wishlist_Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Wishlist_ItemsRepo extends JpaRepository<Wishlist_Items, Integer> {
    List<Wishlist_Items> findByUser_UserId(int userId);
}