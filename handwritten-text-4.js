class HandwrittenText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg width="900" height="300" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Helvetica:wght@400&display=swap');
          
          text {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica", "Arial", sans-serif;
            font-size: 60px;
            fill: none; /* 塗りなし（透明） */
            stroke: black; /* 黒の輪郭線 */
            stroke-width: 2; /* 輪郭線の太さ */
            stroke-dasharray: 500; /* 文字の全長に適した長さ */
            stroke-dashoffset: 500; /* 初めは線を非表示 */
            animation: draw 2s forwards ease-in-out; /* すべて同時にアニメーション */
            stroke-linejoin: round; /* 交差部分をなめらかに */
            stroke-linecap: round; /* 線の端を丸くする */
          }

          @keyframes draw {
            from {
              stroke-dashoffset: 500;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        </style>
        
        <!-- 上の行（ARCHI-PRISMA） -->
        <text x="50" y="120">A</text>
        <text x="120" y="120">R</text>
        <text x="190" y="120">C</text>
        <text x="260" y="120">H</text>
        <text x="330" y="120">I</text>
        <text x="400" y="120">-</text>
        <text x="470" y="120">P</text>
        <text x="540" y="120">R</text>
        <text x="610" y="120">I</text>
        <text x="680" y="120">S</text>
        <text x="750" y="120">M</text>
        <text x="820" y="120">A</text>

        <!-- 下の行（DESIGN WORKS） -->
        <text x="130" y="220">D</text>
        <text x="200" y="220">E</text>
        <text x="270" y="220">S</text>
        <text x="340" y="220">I</text>
        <text x="410" y="220">G</text>
        <text x="480" y="220">N</text>

        <text x="600" y="220">W</text>
        <text x="670" y="220">O</text>
        <text x="740" y="220">R</text>
        <text x="810" y="220">K</text>
        <text x="880" y="220">S</text>
      </svg>
    `;
  }
}

customElements.define('handwritten-text-4', HandwrittenText);
