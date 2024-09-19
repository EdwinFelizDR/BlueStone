package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Cart_Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Cart_ItemsRepo extends JpaRepository<Cart_Items, Integer> {
    List<Cart_Items> findByCart_UserIdAndProduct_ProductId(int userId, int productId);
}