angular.module("ufcApp").controller('aboutCtrl', function($scope, mainService) {

    mainService.getTitleHolders().then(function(response) {
        $scope.champions = response;
        console.log($scope.champions);

    })

    $scope.getFighters = function(input) {
        $scope.filter = input;
    }


    // random number generator
    $scope.randomNum = function() {
        var points = Math.random();
        return points;
        console.log(points);
    }
    console.log($scope.randomNum());
    console.log($scope.champions)

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
    $scope.fightResults = function(par1, par2) {
        if (par1.points > par2.points) {
            console.log(par2.champion + " got stomped");
            return par2.champion + " got stomped";

        } else if (par2.points > par1.points) {
            console.log(par1.champion + " got stomped");
            return par1.champion + " got stomped";

        } else {
            console.log("it's a draw!");
            return "it's a draw!"
        }
    }

    // end of results



})
