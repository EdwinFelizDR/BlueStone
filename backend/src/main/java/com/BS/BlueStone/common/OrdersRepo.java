// src/main/java/com/BS/BlueStone/common/OrderRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepo extends JpaRepository<Orders, Integer> {
    // Custom query methods can be added here if needed
}