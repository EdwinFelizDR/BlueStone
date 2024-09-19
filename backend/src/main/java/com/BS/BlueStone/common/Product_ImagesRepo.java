package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Product_Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Product_ImagesRepo extends JpaRepository<Product_Images, Integer> {
    // Custom query methods can be added here if needed
}
