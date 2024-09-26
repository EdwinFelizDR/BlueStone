package com.BS.BlueStone.common;

import com.BS.BlueStone.model.CartItemsDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface Cart_ItemsRepo extends JpaRepository<CartItemsDetails, Integer> {

    @Query(value = "SELECT p.product_id, p.name, p.description, p.image_url, p.material, p.price, ci.quantity, (ci.quantity * p.price) AS total_price " +
            "FROM cart_items ci " +
            "JOIN products p ON ci.product_id = p.product_id " +
            "WHERE ci.user_id = :userId", nativeQuery = true)
    List<Map<String, Object>> findCartItemsByUserId(@Param("userId") int userId);
}