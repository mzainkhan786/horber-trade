/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        solutionBg:"linear-gradient(180deg,hsla(0,0%,100%,.5) 69.99%,hsla(0,0%,100%,0)),url('./img/solution/bg.png')",
        solutionBg2:"url('./img/solution/image 6.png')",
        solutionBg3:"url('./img/solution/bg3.png')",
        solutionBg4:"url('./img/about/aboutbg.png')",
        solutionBg5:"url('./img/about/people.png')",
        solutionBg6:"url('./img/contant/bg-desk.jpg')"
    },
       fontFamily:{
      mont:"'Montserrat', sans-serif",
      quick:"'Quicksand', sans-serif"

    },
    colors:{
      primary:"#00154F",
      grish:"#DEE4F5",
      frozi:"#27AAE1", 
    },
    flex:{
      2:"2 2 0%"
    },
   
  },
  plugins: [],
}
}
