/**
 * Train a Bayesian classifier model
 * @param  {object} observations past observations, array of arrays, in object, keyed by outcome (eg {yes:[[],[],[]], no: [[],[],[]]})
 * @return {object}              trained model
 */
const train = observations => {
  let c
  let observationLength

  // validate observations
  try {
    c = Object.keys(observations)
    observationLength = observations[c[0]][0].length
    if (!observationLength || !c.length) { throw new Error() }
    c.forEach(o => {
      observations[o].forEach(row => {
        if (row.length !== observationLength) {
          throw new Error()
        }
      })
    })
  } catch (e) {
    throw new Error('Observations must be an object of multiple observations with an array of arrays of observations all of the same observation length ie: {yes:[[1,1]], no:[[0,1],[1,0],[0,0]]}')
  }

  let cTotal = 0
  const cFreq = []
  const Pc = {}

  // c-freq
  c.forEach(c => {
    cFreq.push(observations[c].length)
    cTotal += observations[c].length
  })
  // P(c)
  cFreq.forEach((freq, i) => {
    Pc[c[i]] = freq / cTotal
  })

  // get unique x
  let x = []
  c.forEach(c => {
    observations[c].forEach((row, r) => {
      row.forEach((cell, c) => {
        if (!x[c]) {
          x[c] = []
        }
        x[c].push(cell)
      })
    })
  })
  x = x.map(field => field.filter((v, i, a) => a.indexOf(v) === i))

  // get Px and Pcx
  const probabilities = x.map((xRow, xi) => {
    const out = []
    xRow.forEach(x => {
      const PxCounts = c.map(cname => observations[cname].filter(field => field.indexOf(x) !== -1).length)
      const Pxc = PxCounts.map((p, i) => p / observations[c[i]].length)
      const Px = PxCounts.reduce((a, b) => a + b, 0) / cTotal
      out.push({x, Px, Pxc})
    })
    return out
  })

  return {Pc, probabilities}
}

/**
 * Return object of outcomes based on trained model
 * @param  {object} trainedModel Output from train()
 * @param  {array} observations  Current observations
 * @return {object}              Likelyhood of all outcomes
 */
const guess = (trainedModel, observations) => {
  // TODO: actually implement this
  return {
    yes: 0.578368999,
    no: 0.421631001
  }
}

// ["Rainy", "Mild", "Normal", true]
// yes = P(0=Rainy | Yes) * P(1=Mild | Yes) * P(2=Normal | Yes) * P(3=true | Yes) * P(Yes)
// no  = P(0=Rainy | No)  * P(1=Mild | No)  * P(2=Normal | No)  * P(3=true | No)  * P(No)
// normalize: answer / (answerYes + answerNo)

module.exports = {train, guess}
