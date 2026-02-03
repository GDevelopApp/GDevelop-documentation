<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Click Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #111;
      color: white;
    }

    #box {
      width: 100px;
      height: 100px;
      background: red;
      position: absolute;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>🎯 Click the Box</h1>
  <p>Score: <span id="score">0</span></p>

  <div id="box"></div>

  <script>
    let score = 0;
    const box = document.getElementById("box");
    const scoreText = document.getElementById("score");

    function moveBox() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      box.style.left = x + "px";
      box.style.top = y + "px";
    }

    box.addEventListener("click", () => {
      score++;
      scoreText.textContent = score;
      moveBox();
    });

    moveBox();
  </script>

</body>
</html>
