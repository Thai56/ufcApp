angular.module("ufcApp").controller('championsCtrl', function($scope, mainService) {
    $scope.shoResults = false;

    mainService.getTitleHolders().then(function(response) {
        $scope.champions = response;
        console.log($scope.champions);

    })

    $scope.getFighters = function(input) {
        $scope.filter = input;
    }

// =======================================Fight_function=================================================================
    // random number generator
    $scope.randomNum = function() {
        var points = Math.floor((Math.random() * 10) + 1);
        return points;
        console.log(points);
    }
    console.log($scope.randomNum());


    //
    // player 1
    $scope.player1 = function(champion) {
            $scope.playerOne = {
                champion: champion.first_name + " " + champion.last_name,
                points: $scope.randomNum()
            }
        }
        // player 2
    $scope.player2 = function(champion) {
        $scope.playerTwo = {
            champion: champion.first_name + " " + champion.last_name,
            points: $scope.randomNum()
        }
    }

    // results
    $scope.fightResults = function(par1, par2, func) {

      $scope.shoResults = true;
        if (par1.points > par2.points) {
            console.log(par2.champion +  func());
            return par2.champion + func();
            // replace got stomped with func
        } else if (par2.points > par1.points) {
            console.log(par1.champion +  func());
            return par1.champion + func();

        } else {
          return "it was a draw!";
        }
    }
    // =======================================DUAL_FUNCTION===========================================================
    // end of results
    $scope.endings = function() {
        var decision = $scope.randomNum();
        $scope.ending1 = " won by a split Decision";
        $scope.ending2 = " won by knockout!";
        $scope.ending3 = " won by submission";
        $scope.ending4 = " won by unannimous decision";
        $scope.ending5 = " won by disqualification";
        $scope.ending6 = " won by TKO"
        if (decision < 2 && decision > 0) {
            return $scope.ending1;
        } else if (decision < 4 && decision > 2) {
            return $scope.ending2;
        } else if (decision < 6 && decision > 4) {
            return $scope.ending3;
        } else if (decision < 8 && decision > 6) {
            return $scope.ending4;
        } else if (decision < 10 && decision > 8) {
            return $scope.ending5;
        } else {
          return $scope.ending6;
        }
        // end of else ifs
    }
    // jquery



    // jquery


})
