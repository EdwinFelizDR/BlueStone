package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.Cart_ItemsRepo;
import com.BS.BlueStone.model.Cart_Items;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ShoppingCartController {
    private final Cart_ItemsRepo cartItemsRepo;

    public ShoppingCartController(Cart_ItemsRepo cartItemsRepo) {
        this.cartItemsRepo = cartItemsRepo;
    }

    @GetMapping("/cartitems")
    public List<Cart_Items> getCartItemsByUserIdAndProductId(@RequestParam int userId, @RequestParam int productId) {
        return cartItemsRepo.findByCart_UserIdAndProduct_ProductId(userId, productId);
    }
}