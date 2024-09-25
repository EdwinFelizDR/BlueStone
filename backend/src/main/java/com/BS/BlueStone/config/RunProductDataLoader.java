package com.BS.BlueStone.config;

import com.BS.BlueStone.common.ProductRepo;
import com.BS.BlueStone.model.Products;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunProductDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(RunProductDataLoader.class);
    private final ProductRepo productRepo;
    private final ObjectMapper objectMapper;

    public RunProductDataLoader(ProductRepo productsRepo, ObjectMapper objectMapper) {
        this.productRepo = productsRepo;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        loadProductData();
    }

    private void loadProductData() {
        if (productRepo.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/products.json")) {
                List<Products> products = objectMapper.readValue(inputStream, new TypeReference<List<Products>>() {});
                logger.info("Products data loaded successfully {}", products);
                productRepo.saveAll(products);
            } catch (IOException e) {
                throw new RuntimeException("Error loading products data: ", e);
            }
        } else {
            logger.info("Products data already loaded");
        }
    }
}