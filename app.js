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


            //for monster
            var max = 12;
            var min = 5;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.playerHP -= damage;
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});