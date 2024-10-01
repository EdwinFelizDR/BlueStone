// src/main/java/com/BS/BlueStone/controller/CheckoutController.java
package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.OrderItemRepo;
import com.BS.BlueStone.common.PaymentsRepo;
import com.BS.BlueStone.model.Order_Items;
import com.BS.BlueStone.model.Payments;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class CheckoutController {
    private final OrderItemRepo orderItemsRepo;
    private final PaymentsRepo paymentsRepo;

    public CheckoutController(OrderItemRepo orderItemsRepo, PaymentsRepo paymentsRepo) {
        this.orderItemsRepo = orderItemsRepo;
        this.paymentsRepo = paymentsRepo;
    }

    @PostMapping("/checkout")
    public ResponseEntity<String> processCheckout(@RequestBody Map<String, Object> checkoutData) {
        // Extract order and payment details from the request body
        Integer orderId = (Integer) checkoutData.get("order_id");
        Double amount = (Double) checkoutData.get("amount");
        String paymentMethod = (String) checkoutData.get("payment_method");

        // Fetch the order from the database using the orderId
        Order_Items order = orderItemsRepo.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));

        // Create a new Payments object and set its fields
        Payments payment = new Payments();
        payment.setOrder(order);
        payment.setPaymentDate(LocalDateTime.now());
        payment.setAmount(amount);

        // Save the payment
        paymentsRepo.save(payment);

        return ResponseEntity.ok("Checkout processed successfully!");
    }
}