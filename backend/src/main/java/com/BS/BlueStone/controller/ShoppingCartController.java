package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.Cart_ItemsRepo;
import com.BS.BlueStone.model.CartItemsDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ShoppingCartController {

    @Autowired
    private Cart_ItemsRepo cartItemsRepo;

    @GetMapping("/cart-items/{userId}")
    public Optional<?> getCartItems(@PathVariable int userId) {
        return Optional.ofNullable(cartItemsRepo.findCartItemsByUserId(userId));
    }

    @PostMapping("/add-to-cart")
    public void addToCart(CartItemsDetails cartItemsDetails) {
        cartItemsDetails.save(cartItemsDetails);
    }
}