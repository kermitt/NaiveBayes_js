/* global describe it */

const expect = require('chai').expect
const {train, guess} = require('../src/Bayes')
const observations = require('./observations.json')
const trained = require('./trained.json')

describe('Naive Bayes', () => {
  describe('train', () => {
    it('should generate correct trained model from observations', () => {
      expect(train(observations)).to.deep.equal(trained)
    })
  })

  describe('guess', () => {
    it('should guess correctly with a trained model', () => {
      expect(guess(trained, ['Rainy', 'Mild', 'Normal', true])).to.deep.equal({
        yes: 0.42862741256000775,
        no: 0.5713725874399922
      })
    })
  })
})
