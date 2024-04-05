describe('Покупка аватара тренера', function () {
    
    it('e2e тест покупки аватара', function () {
        cy.visit('https://pokemonbattle.me/');

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // вводим email
        cy.get('#password').type('USER_PASSWORD'); // вводим пароль
        cy.get('.auth__button').click(); // нажимаем кнопку "Войти"

        cy.get('.header__btns > [href="/shop"]').click(); // нажимаем кнопку "Магазин"
        cy.get('.available > button').first().click(); // кликаем по кнопке "Купить" у первого доступного аватара

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599'); // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('A STANKEVICH'); // вводим имя и фамилию
        cy.get('.pay-btn').click(); // нажимаем кнопку "Оплатить"
        
        cy.get('#cardnumber').type('56456'); // вводим код из смс
        cy.get('.payment__submit-button').click(); // нажимаем кнопку "Отправить"

        cy.get('.payment__font-for-success').should('be.visible'); // проверяем, что текст виден пользователю
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверяем текст
    })
})