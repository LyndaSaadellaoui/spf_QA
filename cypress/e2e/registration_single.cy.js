
describe('empty spec', () => {

  //Landing Page
  it('register', () => {
    cy.visit('http://167.99.253.22:3000')
    cy.wait(5000)
    cy.get('#register').click()
  })

  //Error Message step 1
  it('ErrorMessages', () => {
    cy.wait(2000)
    cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/form/div/div[2]/button[2]').click()
  })

  //step1
  it('requires first name', () => {
    cy.wait(2000)
    cy.get('input[name="applicant.firstName"]').clear().type('Lynda')
  })

  it('requires last name', () => {
   cy.wait(2000)
   cy.get('input[name="applicant.lastName"]').clear().type('Saadellaoui')
  })

  it('requires sexe', () => {
    cy.wait(2000)
    cy.xpath('//*[@id="Anrede*select"]').click()
    cy.wait(2000)
    cy.xpath('//*[@id="menu-applicant.title"]/div[3]/ul/li[1]').click()
  })

  it('requires Mobil', () => {
    cy.wait(2000)
    cy.get('input[name="applicant.mobile"]').clear().type('23740012')
  })

  it('requires Email', () => {
    cy.wait(2000)
    cy.get('input[name="applicant.email"]').clear().type('sadellaouilynda@gmail.com')
  })

  it('WayToReach', () => {
    cy.wait(2000)
    cy.xpath('//*[@id="WieerreichenwirSieamBesten?*select"]').click()
    cy.wait(2000)
    cy.xpath('//*[@id="menu-applicant.bestReachWay"]/div[3]/ul/li[1]').click()
  })
 
  it('CardSingle', () => {
    cy.wait(2000)
    cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/form/div/div[1]/div[3]/div/div[1]/div/span/img').click()
  })

  it('GoToStep2', () => {
       cy.wait(2000)
       cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/form/div/div[2]/button[2]').click()
  })

    //Error Message step 2
    it('ErrorMessages', () => {
      cy.wait(2000)
      cy.xpath('//*[@id="__next"]/div/div[2]/div[2]/form/div/div[2]/button[2]').click()
    })

    //step2
    it('FirstName',() =>{
    cy.wait(2000)
    cy.get('input[name="person.personA.cared.firstName"]').clear().type('Noura')
    })
})