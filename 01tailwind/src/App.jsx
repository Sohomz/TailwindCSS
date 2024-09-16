import { useState } from 'react'

function App() {
  return (
    <>
      <nav>
        <div class="list-none justify-center space-x-11 flex py-5 bg-purple-900 text-white">
          <li class="cursor-pointer">Home</li>
          <li class="cursor-pointer">Pages</li>
          <li class="cursor-pointer">Section</li>
          <li class="cursor-pointer">Docs</li>
          <li class="cursor-pointer">Icons</li>
          <button class="flex bg-yellow-500 px-5 justify-around rounded-md font-bold">
            <img class="flex h-7 py-1 mr-2" src="./src/assets/shopping-cart.png">
            </img>
            <div class="flex items-center">Buy Now</div>
          </button>
        </div>
      </nav>
      {/* This is body */}
      <div class="flex justify-between flex-nowrap">
        <div class="text-white my-52 mx-16 flex-col">
          <h1 class="text-yellow-500 font-bold text-5xl">Come Strong</h1><br></br>
          <h2 class="text-white-500 font-bold text-4xl">Leave Stronger !!</h2><br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum qui, exercitationem quaerat aliquid quo eligendi eum tempore amet, blanditiis, vel atque ab quis? Ut, molestias ullam possimus at quaerat minima?</p>
          {/* This the button */}
          <br></br>
          <button class="bg-white justify-around px-10 py-4 rounded-md font-medium text-black hover:bg-violet-600  hover:text-white hover:scale-105">Lets Begin!</button>
        </div>
        <div>
          <img class="flex-shrink-0 mix-blend-normal h-auto" src="./src/assets/imgMan.jfif"></img>
        </div>
      </div>
      

    </>
  )
}


export default App
