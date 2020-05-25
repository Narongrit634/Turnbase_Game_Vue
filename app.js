new Vue ({
    el: '#app',
    data: {
        playerHP: 100,
        playerMP: 100,
        monsterHP: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHP = 100;
            this.playerMP = 50;
            this.monsterHP = 100;
        },
        attack: function() {
            //for player
            this.monsterHP -= this.calculateDamage(3,10);

            if (this.checkWin()) {
                return;
            }
            //for monster
            this.playerHP -= this.calculateDamage(5,12);
            this.checkWin();
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHP <= 0) {
                if (confirm('YOU WON,you killed monster')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHP <= 0) {
                if (confirm('YOU LOSE,monster killed you')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});