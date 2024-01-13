import express from "express";
import router from "./auth";
const userComment = require("../models/Comments")

router.post("/qna", function(req, res, next){
    const commentData = new userComment({
        body: res.body,
    })
});

module.exports = router;