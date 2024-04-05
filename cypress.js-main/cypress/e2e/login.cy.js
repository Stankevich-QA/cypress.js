describe('Автотесты на авторизацию', function () {
    
    it('Правильныйт логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна
        
        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна
        
        cy.get('#loginButton').click(); // нажимаем кнопку "Войти"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })


    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
    
        cy.get('#forgotEmailButton').click(); // нажимаем кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //вводим почту
        cy.get('#restoreEmailButton').click(); // клик на кнопку "Отправить код"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
        })


    it('Проверка авторизации с неверным паролем', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio2'); //вводим неверный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаем кнопку "Войти"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
    })


    it('Проверка авторизации с неверным логином', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('tes_test@test.com'); // вводим неверный логин
        cy.get('#loginButton').should('be.disable111'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаем кнопку "Войти"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
    })

    
    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('germandolnikov.ru'); // вводим логин без @
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаем кнопку "Войти"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
    })


    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // вводим логин с заглавными буквами
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); //вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

        cy.get('#loginButton').click(); // нажимаем кнопку "Войти"

        cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик
    })
})
