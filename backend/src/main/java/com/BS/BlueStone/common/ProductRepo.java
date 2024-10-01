// src/main/java/com/BS/BlueStone/common/ProductRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Products, Integer> {
    // Custom query methods can be added here if needed
}