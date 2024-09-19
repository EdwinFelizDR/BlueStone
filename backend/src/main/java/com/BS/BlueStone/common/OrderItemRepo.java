// src/main/java/com/BS/BlueStone/common/OrderItemRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Order_Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepo extends JpaRepository<Order_Items, Integer> {
    // Custom query methods can be added here if needed
}