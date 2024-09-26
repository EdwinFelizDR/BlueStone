package com.BS.BlueStone.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "order_items")
public class Order_Items {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long order_id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products product;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price", nullable = false, precision = 10)
    private double price;

    @Column(name = "order_date", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime orderDate;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @Column(name = "total_amount", nullable = false, precision = 10)
    private double totalAmount;

}