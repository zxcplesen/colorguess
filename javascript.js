var fake_id = 0;
var hearts = 3;
var count = 0;
var miss_count = 0;
var nickname = '';

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

//
const firebaseConfig = {
    apiKey: "AIzaSyDH1L9Jx0kd-T7KOjv4aAp1h71i2KlHGvo",
    authDomain: "test-c68dd.firebaseapp.com",
    databaseURL: "https://test-c68dd-default-rtdb.firebaseio.com",
    projectId: "test-c68dd",
    storageBucket: "test-c68dd.firebasestorage.app",
    messagingSenderId: "1077137934229",
    appId: "1:1077137934229:web:439e799d2244035b13d89c",
    measurementId: "G-4GBBF35FQV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function addScoreToDatabase(nickname, count) {
    const scoresRef = ref(db, "scores");
    const newScoreRef = push(scoresRef);

    set(newScoreRef, {
        nickname: nickname,
        count: count,
        date: new Date().toISOString()
    })
        .catch((error) => {
            console.error("Ошибка при добавлении:", error);
            alert("Ошибка при отправке данных!");
        });
}

function loadLeaderboard() {
    const scoresRef = ref(db, "scores");

    onValue(scoresRef, (snapshot) => {
        const data = snapshot.val();
        const leaderboardDiv = document.getElementById("leaderboard");

        if (!data) {
            leaderboardDiv.innerHTML = "<p>Not players</p>";
            return;
        }

        const scores = Object.values(data);

        scores.sort((a, b) => b.count - a.count);

        let html = `
      <table border="1" cellspacing="0" cellpadding="5" style="width:100%; color:white; text-align:center;">
        <thead style="background-color: #222;">
          <tr>
            <th>🏅 Raiting</th>
            <th>👤 Name</th>
            <th>🔥 Score</th>
          </tr>
        </thead>
        <tbody>
    `;

        scores.forEach((item, index) => {
            html += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.nickname}</td>
          <td>${item.count}</td>
        </tr>
      `;
        });

        html += `</tbody></table>`;
        leaderboardDiv.innerHTML = html;
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", addScoreToDatabase);
    }

    loadLeaderboard();
});


//
document.addEventListener("DOMContentLoaded", function () {
    Start();
});

function Start() {
    document.getElementById('add').addEventListener('click', AddNick);
    if (hearts > 0) {
        var red = Math.floor(Math.random() * 256) + 1;
        var green = Math.floor(Math.random() * 256) + 1;
        var blue = Math.floor(Math.random() * 256) + 1;

        var el = document.getElementsByClassName('button');

        if (fake_id != 0) {
            document.getElementById(fake_id).removeEventListener('click', ClickFake);
        }

        for (var i = 0; i < el.length; i++) {
            el[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            el[i].addEventListener('click', ClickMiss);
        }

        if (hearts == 0) {
            var el = document.getElementById('hearts');
            el.innerHTML = 'HEARTS: ' + hearts;
        }

        fake_id = Math.floor(Math.random() * 25) + 1;

        if (count < 2)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 120}, ${green + 120}, ${blue + 120})`;
        else if (count >= 2 && count < 4)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 100}, ${green + 100}, ${blue + 100})`;
        else if (count >= 4 && count < 6)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 80}, ${green + 80}, ${blue + 80})`;
        else if (count >= 6 && count < 8)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 60}, ${green + 60}, ${blue + 60})`;
        else if (count >= 8 && count < 10)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 40}, ${green + 40}, ${blue + 40})`;
        else if (count >= 10 && count < 12)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 30}, ${green + 30}, ${blue + 30})`;
        else if (count >= 12 && count < 14)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 25}, ${green + 25}, ${blue + 25})`;
        else if (count >= 14 && count < 16)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 20}, ${green + 20}, ${blue + 20})`;
        else if (count >= 16 && count < 18)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 19}, ${green + 19}, ${blue + 19})`;
        else if (count >= 18 && count < 20)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 18}, ${green + 18}, ${blue + 18})`;
        else if (count >= 20 && count < 22)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 17}, ${green + 17}, ${blue + 17})`;
        else if (count >= 22 && count < 24)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 16}, ${green + 16}, ${blue + 16})`;
        else if (count >= 24 && count < 26)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 15}, ${green + 15}, ${blue + 15})`;
        else if (count >= 26 && count < 28)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 14}, ${green + 14}, ${blue + 14})`;
        else if (count >= 28 && count < 30)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 13}, ${green + 13}, ${blue + 13})`;
        else if (count >= 30 && count < 32)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 12}, ${green + 12}, ${blue + 12})`;
        else if (count >= 32 && count < 34)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 11}, ${green + 11}, ${blue + 11})`;
        else if (count >= 34)
            el[fake_id - 1].style.backgroundColor = `rgb(${red + 10}, ${green + 10}, ${blue + 10})`;
        
        el[fake_id - 1].removeEventListener('click', ClickMiss);
        el[fake_id - 1].addEventListener('click', ClickFake);
    } else {
        var el = document.getElementById('hearts');
        el.innerHTML = 'HEARTS: ' + hearts;
        var endblock = document.getElementById('endblock');
        endblock.style.display = 'inline';
        var lose = document.getElementById('lose');
        lose.style.display = 'inline';
        var restart = document.getElementById('restart');
        restart.style.display = 'inline';
    }
}

function AddNick() {
    const nicknameInput = document.getElementById('nickname_input');
    nickname = nicknameInput.value;

    if (nickname.trim() == '') {
        alert('Пожалуйста, введите никнейм');
    } else {
        var mainblock_start = document.getElementById('mainblock_start');
        mainblock_start.style.display = 'none';
    }
}

function ClickFake() {
    count++;
    var el = document.getElementById('counter');
    el.innerHTML = 'COUNT: ' + count;
    var mainblock = document.getElementById('mainblock');
    mainblock.style.border = '1px solid white';
    var miss = document.getElementById('miss');
    miss.style.display = 'none';
    hearts = 3;
    var el = document.getElementById('hearts');
    el.innerHTML = 'HEARTS: ' + hearts;
    miss_count = 0;
    Start();
}

function ClickMiss(e) {
    if (e.target.id != fake_id) {
        hearts--;
        var miss = document.getElementById('miss');

        miss_count++;
        miss.style.display = 'inline-block';
        miss.innerHTML = 'MISS: ' + miss_count;

        var mainblock = document.getElementById('mainblock');
        mainblock.style.border = '1px solid red';

        if (hearts >= 1) {
            var el = document.getElementById('hearts');
            el.innerHTML = 'HEARTS: ' + hearts;
        } else {
            var el = document.getElementById('hearts');
            el.innerHTML = 'HEARTS: ' + hearts;
            var endblock = document.getElementById('endblock');
            endblock.style.display = 'inline';
            var lose = document.getElementById('lose');
            lose.style.display = 'inline';
            var restart = document.getElementById('restart');
            restart.style.display = 'inline';
            var mainblock_end = document.getElementById('mainblock_end');
            mainblock_end.style.display = 'inline';
            var fake = document.getElementById(fake_id);
            fake.style.boxShadow = '0px 0px 20px white';
            addScoreToDatabase(nickname, count)
            document.getElementById('restart').addEventListener('click', ClickRestart);
        }
    }
}

function ClickRestart() {
    location.reload();
}

