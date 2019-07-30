setTimeout(function () {
    console.log('9')
  }, 0)

  console.log('1')

  async function async1() {
    console.log('2')
    await async2()
    console.log('8')
  }

  async function async2() {
    return Promise.resolve();
  }

  async1()
  
  new Promise(function (resolve) {
    console.log('4')
    resolve()
  }).then(function () {
    console.log('7')
  })

  console.log('5')