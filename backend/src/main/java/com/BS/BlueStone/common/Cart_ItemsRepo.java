package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Cart_Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Cart_ItemsRepo extends JpaRepository<Cart_Items, Integer> {
    // Custom query methods can be added here if needed
}
