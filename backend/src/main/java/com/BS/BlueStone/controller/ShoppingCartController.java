package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.Cart_ItemsRepo;
import com.BS.BlueStone.common.ProductRepo;
import com.BS.BlueStone.common.UserRepo;
import com.BS.BlueStone.model.CartItemsDetails;
import com.BS.BlueStone.model.Products;
import com.BS.BlueStone.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
public class ShoppingCartController {

    @Autowired
    private Cart_ItemsRepo cartItemsRepo;

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/cart-items/{userId}")
    public Optional<?> getCartItems(@PathVariable int userId) {
        return Optional.ofNullable(cartItemsRepo.findCartItemsByUserId(userId));
    }

    @PostMapping("/add-to-cart")
    public ResponseEntity<String> addToCart(@RequestBody Map<String, Object> cartData) {
        try {
            // Extract product_id, user_id, and quantity from the request body
            int productId = (int) cartData.get("product_id");
            int userId = (int) cartData.get("user_id");
            int quantity = (int) cartData.get("quantity");

            // Fetch the corresponding Product and User entities
            Products product = productRepo.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
            Users user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

            // Create a new CartItemsDetails object
            CartItemsDetails cartItemsDetails = new CartItemsDetails();
            cartItemsDetails.setProduct(product);  // Set the Product object
            cartItemsDetails.setUser(user);        // Set the User object
            cartItemsDetails.setQuantity(quantity); // Set the quantity

            // Save the CartItemsDetails record
            cartItemsRepo.save(cartItemsDetails);

            // Return a success response
            return ResponseEntity.ok("Item successfully added to cart.");

        } catch (Exception e) {
            // Handle any errors (e.g., product or user not found)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add item to cart: " + e.getMessage());
        }
    }

}