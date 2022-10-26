describe('AmazonAmerica', function(){
  it('Adding ', function(){
      cy.visit("https://www.amazon.com/america/s?k=america")
      cy.get("#twotabsearchtextbox").click().clear().type("Samsung Mobile").type('{enter}')
      // cy.xpath("//span[normalize-space()='SAMSUNG Galaxy A12 Black, 64GB, 4 GB Ram, 5,000 Battery, 6.5 inches Display, 48 Camera, Factory Unlocked 4G']").click()
      cy.xpath("(//span[contains(text(),'SAMSUNG Galaxy S21 FE 5G Cell Phone')])[1]").click()
      cy.get("#add-to-cart-button").click()
      cy.xpath("(//a[contains(text(),'Go to Cart')])[2]").click()
      let actCount = "0"
      cy.get("#nav-cart-count").then((x)=>{
          let expCount = x.text()
          expect(actCount).to.not.equal(expCount)
      })
      cy.get("input[value='Delete']").click()
      cy.reload()
      cy.wait(1000)
      cy.get("#nav-cart-count").then((x)=>{
          let expCountAfter = x.text()
          expect(actCount).to.equal(expCountAfter)
      })
  })
}) 