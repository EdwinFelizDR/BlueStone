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

    // Billing Address Fields
    @Column(name = "billing_first_name", nullable = false)
    private String billingFirstName;

    @Column(name = "billing_last_name", nullable = false)
    private String billingLastName;

    @Column(name = "billing_username", nullable = false)
    private String billingUsername;

    @Column(name = "billing_email", nullable = false)
    private String billingEmail;

    @Column(name = "billing_address", nullable = false)
    private String billingAddress;

    @Column(name = "billing_address2")
    private String billingAddress2;

    @Column(name = "billing_country", nullable = false)
    private String billingCountry;

    @Column(name = "billing_state", nullable = false)
    private String billingState;

    @Column(name = "billing_zip", nullable = false)
    private String billingZip;

    // Shipping Address Fields
    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "shipping_address2")
    private String shippingAddress2;

    @Column(name = "shipping_country")
    private String shippingCountry;

    @Column(name = "shipping_state")
    private String shippingState;

    @Column(name = "shipping_zip")
    private String shippingZip;
}