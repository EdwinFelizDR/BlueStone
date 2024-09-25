package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.ShoppingCartRepo;
import com.BS.BlueStone.model.CartItemsDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShoppingCartController {

    @Autowired
    private ShoppingCartRepo shoppingCartRepo;

    @GetMapping("/cart-items/{userId}")
    public List<CartItemsDetails> getCartItemsByUserId(@PathVariable int userId) {
        return shoppingCartRepo.findCartItemsByUserId(userId);
    }
}