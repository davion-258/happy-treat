package com.davion.happytreat.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class ReceiptController(
) {
    @GetMapping("/list-receipt")
    fun listReceipt(): List<String> {
        return listOf("Receipt1", "Receipt2")
    }
}