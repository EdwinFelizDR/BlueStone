package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.ProductRepo;
import com.BS.BlueStone.model.Products;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductCardController {

    private final ProductRepo productRepo;

    public ProductCardController(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    @GetMapping("/ProductCard")
    public ResponseEntity<List<Products>> getProducts(){
        List<Products> products = productRepo.findAll();
        return ResponseEntity.ok(products);
    }
}
