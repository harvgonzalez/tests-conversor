import React from 'react';

function CurrencyRow (){
    return (
        <div>
          <input type="number" className="input" />
          <select>
              <option value="hi">COUNTRYNAME</option>
          </select>
        </div>
    );
}

export default CurrencyRow;