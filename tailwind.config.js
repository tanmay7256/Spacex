module.exports = {
  content: [
    src = "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-slide': "url('./images/img3.webp')",
        'second-slide': "url('./images/img1.webp')",
        'third-slide': "url('./images/img2.webp')",
        'fourth-slide': "url('./images/img0.webp')",
        'fifth-slide': "url('./images/img4.webp')",
      }
    },
  },
  plugins: [],
}
