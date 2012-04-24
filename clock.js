"use strict";

function ticktack() {
    document.getElementById('clock').textContext = new Date();
	setTimeout(ticktack, 100);
}