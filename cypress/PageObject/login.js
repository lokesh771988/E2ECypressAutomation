import loginlocators from "../Locators/login_Locators.js"

class loginPage{

    url="https://demo.guru99.com/test/newtours/"
    userName1='[name="userName"]'
    password1='[name="password"]'
    submit='[name="submit"]'

    visit(){
        cy.visit(this.url)
    }

    typeUserName(userName){
        const name = cy.get(this.userName1)
        name.clear()
        name.type(userName)
        return this
    }

    typePassword(password){
        const pass1 = cy.get(this.password1)
        pass1.clear()
        pass1.type(password)
        return this
    }

    clickSubmit(){
        cy.get(this.submit).click()
    }

    loginMethod(userName, password){
        this.visit()
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickSubmit()
    }
}

export default loginPage