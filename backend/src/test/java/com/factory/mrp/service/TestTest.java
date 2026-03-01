package com.factory.mrp.service;

import static org.junit.jupiter.api.Assertions.*;

import java.math.BigDecimal;

import org.junit.jupiter.api.Test;

public class TestTest {
    @Test
    void testTestCalculatePossibleUnits() {
BigDecimal stock = new BigDecimal("10.0");
        BigDecimal needed = new BigDecimal("2.0");
        
        // Faz a conta: 10 / 2
        int result = stock.divideToIntegralValue(needed).intValue();
        
        // Linha 17 corrigida: (esperado, atual, "mensagem")
        assertEquals(5, result, "The production should be limited to 5 units");
    }
    
}
