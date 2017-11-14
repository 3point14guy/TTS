'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// const jumboHeight = $('.jumbotron').outerHeight()
// function parallax () {
//   const scrolled = $(window).scrollTop()
//   $('.bg').css('height', (jumboHeight - scrolled) + 'px')
// }
//
// $(window).scroll(function (e) {
//   parallax()
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
