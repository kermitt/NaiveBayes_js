/* global describe it */

const expect = require('chai').expect

const bayes = require('../index')

describe('Naive Bayes', () => {
  it('should guess that you will play golf', () => {
    const trainingData = bayes.train(require('./observations.json'))
    const results = bayes.guess(trainingData, ['RAINY', 'MILD', 'NORMAL', 'TRUE'])
    expect(results['NO']).to.equal(0.42163100057836905)
    expect(results['YES']).to.equal(0.578368999421631)
  })
})
