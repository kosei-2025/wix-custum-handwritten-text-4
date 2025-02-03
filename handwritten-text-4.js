class HandwrittenText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg width="800" height="250" viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="reveal-mask">
            <rect x="0" y="0" width="800" height="250" fill="white">
              <animate attributeName="y" from="250" to="0" dur="3s" fill="freeze" />
            </rect>
          </mask>
        </defs>
        
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
          
          text {
            font-family: 'Roboto', sans-serif;
            font-size: 60px;
            fill: black; /* 塗りつぶしを黒に設定 */
            mask: url(#reveal-mask); /* マスクを適用して手書き風に表示 */
          }
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
