var Sudoku = (function () {

  var getInput = (qnum, row, col) => {
    let qrow = row + 3 * (Math.ceil(qnum/3) - 1);
    let factor = (qnum + 2) % 3;
    let qcol = factor + col + (factor * 2);
    return `<div class="col-sm-4 square">
      <input type="text" 
        class="q${qnum} r${qrow} c${qcol}" 
        id="q${qnum}-r${row}-c${col}" 
        maxlength="1" />
      </div>`;
  }

  var buildQ = (qnum) => {
    let html = `<div class="col-sm-4 qs" id="q${qnum}">`;
    for (var r = 1; r <= 3; r++) {
      for (var c = 1; c <= 3; c++) {
        html += getInput(qnum, r, c);
      }
    }
    html += `</div>`;
    return html;
  }

  var createCanvas = () => {
    let canvas = document.getElementById('sudoku');
    let html = "";
    for (var i = 1; i <= 9; i++) {
      html += buildQ(i)
    }
    canvas.innerHTML = html;
  }

  var generateHard = () => {
    $("#q1-r1-c2").val("5");
    $("#q1-r2-c1").val("1");
    $("#q1-r2-c2").val("3");

    $("#q2-r1-c1").val("7");
    $("#q2-r2-c1").val("6");
    $("#q2-r3-c2").val("8");

    $("#q3-r2-c1").val("7");
    $("#q3-r3-c1").val("9");
    $("#q3-r3-c2").val("2");

    $("#q4-r2-c1").val("2");
    $("#q4-r2-c2").val("6");
    $("#q4-r3-c1").val("3");
    $("#q4-r3-c3").val("5");

    $("#q5-r2-c2").val("5");

    $("#q6-r1-c1").val("5");
    $("#q6-r1-c3").val("4");
    $("#q6-r2-c2").val("8");
    $("#q6-r2-c3").val("9");

    $("#q7-r1-c2").val("7");
    $("#q7-r1-c3").val("6");
    $("#q7-r2-c3").val("1");

    $("#q8-r1-c2").val("1");
    $("#q8-r2-c3").val("8");
    $("#q8-r3-c3").val("6");

    $("#q9-r2-c2").val("4");
    $("#q9-r2-c3").val("5");
    $("#q9-r3-c2").val("7");
  }

  return {
    generate: createCanvas,
    hard: generateHard,
  };

})();


