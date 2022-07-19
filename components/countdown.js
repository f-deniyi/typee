import React from 'react'

const countdown = () => {
  function startTimer (duration) {
    var timer = duration,
      minutes,
      seconds
    setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      display.textContent = minutes + ':' + seconds

      if (--timer < 0) {
        timer = duration
      }
    }, 1000)
  }

  return <div>countdown</div>
}

export default countdown
