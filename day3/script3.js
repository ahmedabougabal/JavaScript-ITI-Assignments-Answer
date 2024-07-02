var timeout;

function openWindow() {
  timeout = setTimeout(function () {
    openedWindow = open("http://127.0.0.1:5500/day3/longpara.html", "_blank")
  }, 3000)
}

function stopLoading() {
  clearTimeout(timeout)
}

function closeWindow() {
  if (openedWindow) {
    openedWindow.close();
  }
}

