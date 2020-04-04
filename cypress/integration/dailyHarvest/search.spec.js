/// <reference types="cypress" />
context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });
  it("Does one ingredient search", () => {
    let search = "kale";
    cy.get("#search").type(search).should("have.value", search);
    cy.get(".ingredients li").contains("Kale");
  });
  it("Does 2 ingredient search", () => {
    let search = "kale,blue";
    cy.get("#search").type(search).should("have.value", search);
    cy.get(".ingredients li").contains("Kale");
    cy.get(".ingredients li").contains("Blue");
  });
});
