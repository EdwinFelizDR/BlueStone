package com.BS.BlueStone.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "cart_items")
public class CartItemsDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartItemId;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    @JsonBackReference
    private ShoppingCart cart;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;

    @Column(name = "quantity", nullable = false)
    private int quantity;

}