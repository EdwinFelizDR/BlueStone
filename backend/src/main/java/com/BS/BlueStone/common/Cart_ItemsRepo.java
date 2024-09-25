package com.BS.BlueStone.common;

import com.BS.BlueStone.model.CartItemsDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Cart_ItemsRepo extends JpaRepository<CartItemsDetails, Integer> {
}