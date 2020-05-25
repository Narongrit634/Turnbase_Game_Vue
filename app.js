new Vue ({
    el: '#app',
    data: {
        playerHP: 100,
        playerMP: 50,
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
            this.monsterAttack();
        },
        specialAttack: function() {
            if (this.isEnoughMp) {
                this.mpUsed();
                this.monsterHP -= this.calculateDamage(10,20);

                this.monsterAttack();
            }
            if (this.checkWin()) {
                return;
            }      
        },
        heal: function() {
            if (this.isEnoughMp) {
                if (this.playerHP == 100){
                    alert('Your HP is Full.Can not be heal.');
                }
                this.playerHP += 20;
                this.mpUsed();
                if (this.playerHP > 100) {
                    this.playerHP = 100;
                }
                this.monsterAttack();
            }
        },
        giveUp: function() {
            alert('You gave up,YOU LOSE!!')
            this.gameIsRunning = false;
        },
        isEnoughMp: function() {
            if (playerMP < 10) {
                alert('Your MP is not enough to cast spell.')
                return true;
            }
            return false;
        },
        mpUsed: function() {
            this.playerMP-=10;
        },
        monsterAttack: function() {
            this.playerHP -= this.calculateDamage(5,12);
            this.checkWin();   
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