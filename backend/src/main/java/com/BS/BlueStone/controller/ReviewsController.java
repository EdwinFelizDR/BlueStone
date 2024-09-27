package com.BS.BlueStone.controller;

import com.BS.BlueStone.common.ReviewsRepo;
import com.BS.BlueStone.model.Reviews;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewsController {
    private final ReviewsRepo reviewsRepo;

    public ReviewsController(ReviewsRepo reviewsRepo) {
        this.reviewsRepo = reviewsRepo;
    }


    @PostMapping("/addReview")
    public ResponseEntity<Reviews> addReview(@RequestBody Reviews review){
        Reviews newReview = reviewsRepo.save(review);
        return ResponseEntity.ok(newReview);
    }

    @GetMapping("/Reviews")
    public ResponseEntity<List<Reviews>> getReviews(){
        List<Reviews> reviews = reviewsRepo.findAll();
        return ResponseEntity.ok(reviews);
    }

//    @GetMapping("/Reviews/{productId}")
//    public ResponseEntity<List<Reviews>> getReviewsByProductId(@PathVariable Integer productId){
//        List<Reviews> reviews = reviewsRepo.findByProductId(productId);
//        return ResponseEntity.ok(reviews);
//    }


    @DeleteMapping("/Reviews/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id){
        Reviews existingReview = reviewsRepo.findById(id).orElse(null);
        if (existingReview == null) {
            return ResponseEntity.notFound().build();
        }
        reviewsRepo.delete(existingReview);
        return ResponseEntity.noContent().build();
    }
}
