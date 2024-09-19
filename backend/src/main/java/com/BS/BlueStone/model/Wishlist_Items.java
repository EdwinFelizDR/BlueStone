// src/main/java/com/BS/BlueStone/model/Wishlist_Items.java
package com.BS.BlueStone.model;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "wishlist_items")
public class Wishlist_Items {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int wishlistItemId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products product;
}