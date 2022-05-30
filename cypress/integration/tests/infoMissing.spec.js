describe("Locators", () => {
    beforeEach(() =>{
        cy.visit("/index.html")
    })

    it("missing info", ()=>{
        cy.get("#myInput").type("make some soup.")
        cy.contains("Add Task").click()

    })
})
