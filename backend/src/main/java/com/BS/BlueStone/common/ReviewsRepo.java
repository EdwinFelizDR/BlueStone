// src/main/java/com/BS/BlueStone/common/ReviewsRepo.java
package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepo extends JpaRepository<Reviews, Integer> {
    // Custom query methods can be added here if needed
    List<Reviews> findByProduct_ProductId(Integer productId);
}