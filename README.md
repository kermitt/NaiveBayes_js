# Naive Bayes

Naive Bayes classifier, in pure-javascript

![P(c|x) = (P(x|c) * P(c)) / P(x)](https://latex.codecogs.com/png.latex?%5Cinline%20%5CLARGE%20P%28c%7Cx%29%20%3D%5Cfrac%7BP%28x%7Cc%29%20P%28c%29%7D%7BP%28x%29%7D)

```
P(c|x) = P(Yes | Sunny) = Posterior Probability
P(x|c) = P(Sunny | Yes) = Likelihood
P(c) = P(Yes) = Class Prior Probability
P(x) = P(Sunny) = Predictor Prior Probability
```

Based on ideas and examples from here:

[!["How Naive Bayes Classifier Works 1/2.. Understanding Naive Bayes and Example" on Youtube](https://img.youtube.com/vi/XcwH9JGfZOU/1.jpg)](https://www.youtube.com/watch?v=XcwH9JGfZOU)

## installation

`npm i naive_bayes`

## usage

```js
 const bayes = require('naive_bayes')
 
 // predict if the person will play golf based on
 // [ Outlook, Temp, Humidity, Windy ]

 const classifier = bayes.train({
  yes: [
    ['Overcast', 'Hot', 'High', false], 
    ['Sunny', 'Mild', 'High', false], 
    ['Sunny', 'Cool', 'Normal', false], 
    ['Overcast', 'Cool', 'Normal', true], 
    ['Rainy', 'Cool', 'Normal', false], 
    ['Sunny', 'Mild', 'Normal', false], 
    ['Rainy', 'Mild', 'Normal', true], 
    ['Overcast', 'Mild', 'High', true], 
    ['Overcast', 'Hot', 'Normal', false]
  ], 
  no: [
    ['Rainy', 'Hot', 'High', false], 
    ['Rainy', 'Hot', 'High', true], 
    ['Sunny', 'Cool', 'Normal', true], 
    ['Rainy', 'Mild', 'High', false], 
    ['Sunny', 'Mild', 'High', true]
  ]
})
console.log(bayes.guess(classifier, ['Rainy', 'Mild', 'Normal', true]))
```

**yes**: `0.578368999421631`
**no**: `0.421631000578369`

To save a trained classifier, you could do this:

```js
const fs = require('fs')
fs.writeFileSync('golf.json', JSON.stringify(classifier))
```

And then reconstitute it later with this:

```js
const bayes = require('naive_bayes')
const classifier = require('./golf.json')

const golfPredict = ( Outlook, Temp, Humidity, Windy ) => bayes.guess(classifier, [ Outlook, Temp, Humidity, Windy ])

console.log(golfPredict('RAINY', 'MILD', 'NORMAL', true))
```