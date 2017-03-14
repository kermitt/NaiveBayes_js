# NaiveBayes_js<br/>
# SAKM: Boxic boku mah gosis<br/>
<br/>
/*<br/>
 'naive bayes' - Bayes' theorom of assuming that predictors are independent.<br/>
<br/>
                P(x|c) P(c)<br/>
 P(c|x) = -------------------------<br/>
                   P(x)<br/>
<br/>
                             [Likelyhood] * [Class Prior Probability ]<br/>
 [Posterior Probability] = --------------------------------------------<br/>
                             [Predictor Prior Probability]<br/>




     EXAMPLE USAGE via https://www.youtube.com/watch?v=XcwH9JGfZOU<br/>
     Bayes.setup(["YES","NO"],["OUTLOOK","TEMP","HUMIDITY","WINDY"]);<br/>
<br/>
     //P(x|c) = P(Sunny|YES) = 3 / 9 = 0.33<br/>
     Bayes.train("NO",["RAINY","HOT","HIGH","FALSE"]);<br/>
     Bayes.train("NO",["RAINY","HOT","HIGH","TRUE"]);<br/>
     Bayes.train("YES",["GREY","HOT","HIGH","FALSE"]);<br/>
     Bayes.train("YES", ["SUNNY","MILD","HIGH","FALSE"]);<br/>
     Bayes.train("YES",["SUNNY","COOL","NORMAL","FALSE"]);<br/>
     Bayes.train("NO",["SUNNY","COOL","NORMAL","TRUE"]);<br/>
     Bayes.train("YES",["GREY","COOL","NORMAL","TRUE"]);<br/>
     Bayes.train("NO",["RAINY","MILD","HIGH","FALSE"]);<br/>
     Bayes.train("YES",["RAINY","COOL","NORMAL","FALSE"]);<br/>
     Bayes.train("YES",["SUNNY","MILD","NORMAL","FALSE"]);<br/>
     Bayes.train("YES",["RAINY","MILD","NORMAL","TRUE"]);<br/>
     Bayes.train("YES",["GREY","MILD","HIGH","TRUE"]);<br/>
     Bayes.train("YES",["GREY","HOT","NORMAL","FALSE"]);<br/>
     Bayes.train("NO",["SUNNY","MILD","HIGH","TRUE"]);<br/>
<br/>
     Bayes.calculate();<br/>
     Bayes.guess();<br/>
     RESULTS:<BR/>
     Bayes.guess(["RAINY","MILD","NORMAL","TRUE"]);<BR/>
 NO: 0.42163100057836905<BR/>
 YES: 0.578368999421631<BR/>


