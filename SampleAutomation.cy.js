/// <reference types="Cypress" />

describe("Automate Bug Challenge", () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit("https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login")
    })

    it("Test Valid login", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").should("be.visible")
          .and("be.enabled")
          .click()

    })

    it("Test Add Employee", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.contains("button", "Add").click()
        cy.contains("Add Employee").should("be.visible")
        cy.get("#firstName").type("TestFirstname")
        cy.get("#lastName").type("TestLastname")
        cy.get("#dependants").type("2")
        cy.get("#addEmployee").click()
    })

    it("Test Add Employee but cancel", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.contains("button", "Add").click()
        cy.contains("Add Employee").should("be.visible")
        cy.get("#firstName").type("TestFirstname")
        cy.get("#lastName").type("TestLastname")
        cy.get("#dependants").type("2")
        cy.get("#employeeModal").click()
    })

    it("Test Delete Employee But Cancel", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.get(":nth-child(1) > :nth-child(9) > .fa-times").click()
        cy.contains("Delete Employee").should("be.visible")
        cy.get("#deleteModal").click()
    })
    
    it("Test Delete Employee", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.get(":nth-child(1) > :nth-child(9) > .fa-times").click()
        cy.contains("Delete Employee").should("be.visible")
        cy.get("#deleteEmployee").click()
    })

    it("Test Edit Employee Cancel", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.get(":nth-child(1) > :nth-child(9) > .fa-edit").click()
        cy.contains("Cancel").should("be.visible")
        cy.get("#employeeModal").click()
    })

    it("Test Edit Employee Update", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").type("click")
        cy.get(":nth-child(1) > :nth-child(9) > .fa-edit").click()
        cy.contains("Update").should("be.visible")
        cy.get("#firstName").type("UpdateName1")
        cy.get("#lastName").type("UpdatelastName1")
        cy.get("#dependants").type("0")
        cy.get("#updateEmployee").click()
    })

    it("Test Paylocity Benefits Dashboard ", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.contains("Paylocity Benefits Dashboard").should("be.visible")
        cy.get(".navbar-brand").click()
    })

    it("Test LogOut", () => {
        cy.get("#Username").type("TestUser284")
        cy.get("#Password").type("FjSGA1/0)}xq")
        cy.get(".btn").click()
        cy.contains("Log Out").should("be.visible")
        cy.get(".nav-item > a").click()
    })
})