package com.BS.BlueStone.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "product_images")
public class Product_Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;

    @Column(name = "image_url", nullable = false, length = 100)
    private String imageUrl;

    @Column(name = "alt_text", length = 100)
    private String altText;

    @Column(name = "created_at", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;
}