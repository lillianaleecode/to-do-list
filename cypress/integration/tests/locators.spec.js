/// <reference types="cypress" />
describe("Locators", () => {
    beforeEach(() =>{
        cy.visit("/index.html")
    })
    it("locationg elements with get command", ()=>{

        // Get all elements by tag name
        cy.get("button")

        // Get all elements by className
        cy.get(".inputVal")

        // Get all elements by className
        cy.get("#myInput")

        // Get all elements with specific classes
        cy.get("[class='btn']")

        // Get all elements by specific attribute
        cy.get("[type='text']")

        // Get all elements by tag name AND class
        //cy.get("button.btn-with-class")

        // Get all elements by tag name AND class and id 
        //cy.get("button.Elements-btn#btn-with-id")

        // Get all elements by tag name AND class and type attribute
        //cy.get("button.Elements-btn[type='submit']")

        // Get all elements with specific data test id
        //cy.get("[data-cy='btn-id-1']")
    });

    it('locating elements with contain', () => {
        // Get element by text
        cy.contains("Task")

        

        // Combine get with contains
        //cy.get("[type='text']").contains("Task")

        // Get element by tag name and text
        //cy.contains("[type='submit']", "Not Unique Text")

        // Get element by descent and text 
        //cy.contains("span", "Not Unique Text")
        //cy.contains("form", "Not Unique Text")
        //cy.get("form").contains("Not Unique Text")
    })

    it("locating elements with find", () => {
        //cy.get("#form-1").find(".btn-1")
    })

    it("locating elements with custom commands", () => {
        // Get all elements by tag
        //cy.getByTag("btn")
    })
    
})
