var Bayes = require("./bayes_binning").Bayes;

function setup() {

    //https://www.youtube.com/watch?v=XcwH9JGfZOU
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
}

function guess_test() {

    //Step1: Find likelyhood of Bayes.guess(["RAINY","MILD","NORMAL","TRUE"]);
    //Likelyhood of yes:
    // P(OUTLOOK=RAINY | YES ) *
    // P(OUTLOOK=TEMP | YES ) *
    // P(OUTLOOK=HUMIDITY | YES ) *
    // P(OUTLOOK=WINDY | YES ) *
    // P(YES)
    // 0.014

    // Likelyhood of no: 0.01

    //Step2: Normalize
    //P(yes) = 0.014 / ( 0.014 + 0.01 ) = 0.57
    //P(no) = 0.011 / ( 0.014 + 0.01 ) = 0.42


    Bayes.guess(["RAINY","MILD","NORMAL","TRUE"]);

    isOk = 1;

    var expected = {};
    expected["NO"] = 0.42163100057836905;
    expected["YES"] = 0.578368999421631;

    isOk &= Bayes.final_results["NO"] == expected["NO"];
    isOk &= Bayes.final_results["YES"] == expected["YES"];
    //console.log("Results...");
    //console.log("\tNO: " + Bayes.final_results["NO"]);
    //console.log("\tYES: " + Bayes.final_results["YES"]);
    log(isOk, "guess_test() ( Note! This is more an integration 'test' than a unittest )")

}
function log(result, whence){
    var verdict = result == 1 ? "PASS" : "FAIL";
    console.log(verdict + "\t" + whence);
}
setup();
guess_test();
//Bayes.display();
