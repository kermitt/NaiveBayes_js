/* global describe it */

const expect = require('chai').expect

const Bayes = require('../index')

describe('Bayes', () => {
  it('should guess that you will play golf', () => {
    // https://www.youtube.com/watch?v=XcwH9JGfZOU
    Bayes.setup(['YES', 'NO'], ['OUTLOOK', 'TEMP', 'HUMIDITY', 'WINDY'])

    // P(x|c) = P(Sunny|YES) = 3 / 9 = 0.33
    Bayes.train('NO', ['RAINY', 'HOT', 'HIGH', 'FALSE'])
    Bayes.train('NO', ['RAINY', 'HOT', 'HIGH', 'TRUE'])
    Bayes.train('NO', ['SUNNY', 'COOL', 'NORMAL', 'TRUE'])
    Bayes.train('NO', ['RAINY', 'MILD', 'HIGH', 'FALSE'])
    Bayes.train('NO', ['SUNNY', 'MILD', 'HIGH', 'TRUE'])

    Bayes.train('YES', ['GREY', 'HOT', 'HIGH', 'FALSE'])
    Bayes.train('YES', ['SUNNY', 'MILD', 'HIGH', 'FALSE'])
    Bayes.train('YES', ['SUNNY', 'COOL', 'NORMAL', 'FALSE'])

    Bayes.train('YES', ['GREY', 'COOL', 'NORMAL', 'TRUE'])

    Bayes.train('YES', ['RAINY', 'COOL', 'NORMAL', 'FALSE'])
    Bayes.train('YES', ['SUNNY', 'MILD', 'NORMAL', 'FALSE'])
    Bayes.train('YES', ['RAINY', 'MILD', 'NORMAL', 'TRUE'])
    Bayes.train('YES', ['GREY', 'MILD', 'HIGH', 'TRUE'])
    Bayes.train('YES', ['GREY', 'HOT', 'NORMAL', 'FALSE'])

    Bayes.calculate()

    Bayes.guess(['RAINY', 'MILD', 'NORMAL', 'TRUE'])

    expect(Bayes.final_results['NO']).to.equal(0.42163100057836905)
    expect(Bayes.final_results['YES']).to.equal(0.578368999421631)
  })
})
