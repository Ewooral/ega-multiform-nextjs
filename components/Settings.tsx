import React, { useState } from 'react';

const colors = ['#053105', '#440909', 'green', 'yellow', 'purple'];
const fontSizes = ['10px', '14px', '18px', '24px', '30px'];

const Settings = () => {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const [cardColor, setCardColor] = useState(colors[0]);
  const [buttonColor, setButtonColor] = useState(colors[0]);
  const [fontSize, setFontSize] = useState(fontSizes[0]);

  return (
    <div style={{ backgroundColor, height: '100vh' }}>
      <div className="p-4">
        <label>
          Background Color:
          <select value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)}>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <label>
          Card Color:
          <select value={cardColor} onChange={(e) => setCardColor(e.target.value)}>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <label>
          Button Color:
          <select value={buttonColor} onChange={(e) => setButtonColor(e.target.value)}>
            {colors.map((color) => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </label>
        <label>
          Font Size:
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
            {fontSizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ backgroundColor: cardColor, fontSize, padding: '16px' }}>
        This is a card.
        <button style={{ backgroundColor: buttonColor, padding: '8px' }}>This is a button</button>
      </div>
    </div>
  );
};

export default Settings;