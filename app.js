new Vue ({
    el: '#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHP = 100;
            this.monsterHP = 100;
        },
        attack: function() {
            //for player
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.monsterHP -= damage;

            if (this.monsterHP <= 0) {
                alert('You slayed monster, YOU WON!!!')
                this.gameIsRunning = false;
                return;
            }
            //for monster
            var max = 12;
            var min = 5;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.playerHP -= damage;

            if (this.playerHP <= 0) {
                alert('The monster slayed you, YOU LOSE!!!')
                this.gameIsRunning = false;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});