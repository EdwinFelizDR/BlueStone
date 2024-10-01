package com.BS.BlueStone.model;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "reviews")
public class Reviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "rating", nullable = false)
    private double rating;

    @Column(name = "comment", columnDefinition = "TEXT")
    private String comment;

    @Column(name = "date", nullable = false)
    private String date;
}