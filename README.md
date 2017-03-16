# Naive Bayes

A pure-javascript implementation of Bayes theorom, which assumes that predictors are independent.

![P(c|x) =\frac{P(x|c) P(c)}{P(x)}](https://latex.codecogs.com/png.latex?%5Cinline%20%5CLARGE%20P%28c%7Cx%29%20%3D%5Cfrac%7BP%28x%7Cc%29%20P%28c%29%7D%7BP%28x%29%7D)

![[Posterior Probability] = \frac{[Likelihood] \times [Class Prior Probability]}{[Predictor Prior Probability]}](https://latex.codecogs.com/png.latex?%5Cinline%20%5CLARGE%20%5BPosterior%20Probability%5D%20%3D%20%5Cfrac%7B%5BLikelihood%5D%20%5Ctimes%20%5BClass%20Prior%20Probability%5D%7D%7B%5BPredictor%20Prior%20Probability%5D%7D)

## installation

`npm i naive_bayes`

## usage

Example data taken from [here](https://www.youtube.com/watch?v=XcwH9JGfZOU).

```js
 const bayes = require('naive_bayes')
 const trainingData = bayes.train({
  "YES": [
    [ "SUNNY", "MILD", "HIGH", "FALSE"]
    [ "SUNNY", "COOL", "NORMAL", "FALSE"]
    [ "GREY", "COOL", "NORMAL", "TRUE"]
    [ "RAINY", "COOL", "NORMAL", "FALSE"]
    [ "SUNNY", "MILD", "NORMAL", "FALSE"]
    [ "RAINY", "MILD", "NORMAL", "TRUE"]
    [ "GREY", "MILD", "HIGH", "TRUE"]
    [ "GREY", "HOT", "NORMAL", "FALSE"]
  ],
  "NO": [
    [ "RAINY", "HOT", "HIGH", "FALSE"]
    [ "RAINY", "HOT", "HIGH", "TRUE"]
    [ "SUNNY", "COOL", "NORMAL", "TRUE"]
    [ "RAINY", "MILD", "HIGH", "FALSE"]
    [ "SUNNY", "MILD", "HIGH", "TRUE"]
  ]
})
console.log(bayes.guess(trainingData, ['RAINY', 'MILD', 'NORMAL', 'TRUE']))
```

**NO**: `0.42163100057836905`
**YES**: `0.578368999421631`
