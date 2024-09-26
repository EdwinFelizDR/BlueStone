package com.BS.BlueStone.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "payments")
public class Payments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order_Items order;

    @Column(name = "payment_date", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime paymentDate;

    @Column(name = "amount", nullable = false, precision = 10)
    private double amount;

    @Column(name = "payment_method", length = 50)
    private String paymentMethod;

}