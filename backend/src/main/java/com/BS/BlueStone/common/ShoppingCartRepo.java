// src/main/java/com/BS/BlueStone/common/Shopping_CartRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.CartItemsDetails;
import com.BS.BlueStone.model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingCartRepo extends JpaRepository<ShoppingCart, Integer> {
    @Query("SELECT ci FROM CartItemsDetails ci JOIN ci.cart c JOIN c.user u JOIN ci.product p WHERE u.userId = :userId")
    List<CartItemsDetails> findCartItemsByUserId(@Param("userId") int userId);
}