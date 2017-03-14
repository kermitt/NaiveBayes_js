# NaiveBayes_js
# SAKM: Boxic boku mah gosis

/*
 'naive bayes' - Bayes' theorom of assuming that predictors are independent.

                P(x|c) P(c)
 P(c|x) = -------------------------
                   P(x)

                             [Likelyhood] * [Class Prior Probability ]
 [Posterior Probability] = --------------------------------------------
                             [Predictor Prior Probability]

 */


       EXAMPLE USAGE via https://www.youtube.com/watch?v=XcwH9JGfZOU
     Bayes.setup(["YES","NO"],["OUTLOOK","TEMP","HUMIDITY","WINDY"]);

     //P(x|c) = P(Sunny|YES) = 3 / 9 = 0.33
     Bayes.train("NO",["RAINY","HOT","HIGH","FALSE"]);
     Bayes.train("NO",["RAINY","HOT","HIGH","TRUE"]);
     Bayes.train("YES",["GREY","HOT","HIGH","FALSE"]);
     Bayes.train("YES", ["SUNNY","MILD","HIGH","FALSE"]);
     Bayes.train("YES",["SUNNY","COOL","NORMAL","FALSE"]);
     Bayes.train("NO",["SUNNY","COOL","NORMAL","TRUE"]);
     Bayes.train("YES",["GREY","COOL","NORMAL","TRUE"]);
     Bayes.train("NO",["RAINY","MILD","HIGH","FALSE"]);
     Bayes.train("YES",["RAINY","COOL","NORMAL","FALSE"]);
     Bayes.train("YES",["SUNNY","MILD","NORMAL","FALSE"]);
     Bayes.train("YES",["RAINY","MILD","NORMAL","TRUE"]);
     Bayes.train("YES",["GREY","MILD","HIGH","TRUE"]);
     Bayes.train("YES",["GREY","HOT","NORMAL","FALSE"]);
     Bayes.train("NO",["SUNNY","MILD","HIGH","TRUE"]);

     Bayes.calculate();
     Bayes.guess();