package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.ProductRepo;
import com.BS.BlueStone.common.ReviewsRepo;
import com.BS.BlueStone.common.UserRepo;
import com.BS.BlueStone.model.Products;
import com.BS.BlueStone.model.Reviews;
import com.BS.BlueStone.model.Users;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
public class ReviewsController {
    private final ReviewsRepo reviewsRepo;
    private final ProductRepo productRepo;
    private final UserRepo userRepo;

    public ReviewsController(ReviewsRepo reviewsRepo, ProductRepo productRepo, UserRepo userRepo) {
        this.reviewsRepo = reviewsRepo;
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }


    @PostMapping("/addReview")
    public ResponseEntity<Reviews> addReview(@RequestBody Map<String, Object> reviewData, @RequestParam Integer productId) {
        // Fetch the product from the database using the productId
        Products product = productRepo.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));

        // Fetch the user from the database using the user_id from the request body
        Integer userId = (Integer) reviewData.get("user_id");
        Users user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        // Create a new Reviews object and set its fields
        Reviews review = new Reviews();
        review.setProduct(product);
        review.setUser(user);
        review.setRating((Double) reviewData.get("rating"));
        review.setComment((String) reviewData.get("comment"));
        review.setDate((String) reviewData.get("date"));

        // Save the review
        Reviews newReview = reviewsRepo.save(review);
        return ResponseEntity.ok(newReview);
    }

    @GetMapping("/reviews/{productId}")
    public ResponseEntity<List<Reviews>> getReviewsByProductId(@PathVariable Integer productId) {
        List<Reviews> reviews = reviewsRepo.findByProduct_ProductId(productId);
        if (reviews.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(reviews);
    }

    @DeleteMapping("/reviews/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id){
        Reviews existingReview = reviewsRepo.findById(id).orElse(null);
        if (existingReview == null) {
            return ResponseEntity.notFound().build();
        }
        reviewsRepo.delete(existingReview);
        return ResponseEntity.noContent().build();
    }
}
