'use strict';

function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 2);
            if (randomNumber > 0) {
                resolve("Welcome to your account");
            } else {
                reject("Incorrect email or password");
            }
        }, 2000);
    });
}
