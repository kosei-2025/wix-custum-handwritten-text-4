class HandwrittenText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg width="800" height="250" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
          
          text {
            font-family: 'Roboto', sans-serif;
            font-size: 60px;
            fill: none; /* 塗りなし（透明） */
            stroke: black; /* 黒の輪郭線 */
            stroke-width: 2; /* 輪郭線の太さ */
            stroke-dasharray: 1000; /* 線を途切れずに長くする */
            stroke-dashoffset: 1000; /* 初めは線を非表示に */
            animation: draw 3s forwards ease-in-out;
            stroke-linejoin: round; /* 交差部分をなめらかに */
            stroke-linecap: round; /* 線の端を丸くする */
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          
          /* 文字ごとに遅延を追加 */
          text:nth-child(1) { animation-delay: 0.1s; }
          text:nth-child(2) { animation-delay: 0.2s; }
          text:nth-child(3) { animation-delay: 0.3s; }
          text:nth-child(4) { animation-delay: 0.4s; }
          text:nth-child(5) { animation-delay: 0.5s; }
          text:nth-child(6) { animation-delay: 0.6s; }
          text:nth-child(7) { animation-delay: 0.7s; }
          text:nth-child(8) { animation-delay: 0.8s; }
          text:nth-child(9) { animation-delay: 0.9s; }
          text:nth-child(10) { animation-delay: 1.0s; }
          text:nth-child(11) { animation-delay: 1.1s; }
          text:nth-child(12) { animation-delay: 1.2s; }
          text:nth-child(13) { animation-delay: 1.3s; }
          text:nth-child(14) { animation-delay: 1.4s; }
          text:nth-child(15) { animation-delay: 1.5s; }
          text:nth-child(16) { animation-delay: 1.6s; }
        </style>
        
        <!-- 上の行（ARCHI-PRISMA） -->
        <text x="30" y="100">A</text>
        <text x="85" y="100">R</text>
        <text x="140" y="100">C</text>
        <text x="195" y="100">H</text>
        <text x="250" y="100">I</text>
        <text x="280" y="100">-</text>
        <text x="320" y="100">P</text>
        <text x="375" y="100">R</text>
        <text x="430" y="100">I</text>
        <text x="460" y="100">S</text>
        <text x="515" y="100">M</text>
        <text x="580" y="100">A</text>

        <!-- 下の行（DEZIGN WORKS） -->
        <text x="30" y="180">D</text>
        <text x="85" y="180">E</text>
        <text x="140" y="180">Z</text>
        <text x="195" y="180">I</text>
        <text x="225" y="180">G</text>
        <text x="290" y="180">N</text>

        <text x="400" y="180">W</text>
        <text x="470" y="180">O</text>
        <text x="530" y="180">R</text>
        <text x="590" y="180">K</text>
        <text x="650" y="180">S</text>
      </svg>
    `;
  }
}

customElements.define('handwritten-text-4', HandwrittenText);
