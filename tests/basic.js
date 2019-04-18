module.exports = {
  'Show motto on home page'(client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('body .mr_searchMotto')
      .end();
  },

  'When I do the correct search, it shows movies'(client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 3000)
      .setValue('.mr_searchInput', 'In Bruges')
      .keys(client.Keys.ENTER)
      .assert.elementPresent('.mr_moviePreviews')
      .assert.containsText('.mr_moviePreview:first-child .mr_movieTitle', 'IN BRUGES')
      .end();
  },

  'When I click on movie, it shows the correct one'(client) {
    client
      .url('http://localhost:8080/search?search=in%20bruges&genre=title')
      .waitForElementVisible('.mr_moviePreview:first-child', 3000)
      .click('.mr_moviePreview:first-child')
      .assert.elementPresent('.mr_movie')
      .assert.containsText('.mr_tagLine', 'Shoot first. Sightsee later.')
      .end();
  },
}
