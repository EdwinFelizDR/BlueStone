package com.BS.BlueStone.common;

import com.BS.BlueStone.model.Payments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentsRepo extends JpaRepository<Payments, Integer> {
    // Custom query methods can be added here if needed
}
