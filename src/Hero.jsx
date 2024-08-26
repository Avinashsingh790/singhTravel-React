
import './index.css'; 

function Hero() {

 

  const swapCities = () => {
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp;
  };

 

  const searchBuses = () => {
    // Logic for searching buses
    alert('Searching for buses...');
  };

  return (
    <section id="hero">
      <div className="bus-search">
        <div className="input-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" placeholder="Enter departure city" />
          <button className="swap-btn" onClick={swapCities}>Swap</button>
        </div>

        <div className="input-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" placeholder="Enter destination city" />
        </div>

        <div className="input-group">
          <label htmlFor="seat-type">Seat type (optional)</label>
          <select id="seat-type">
            <option value="seater">Seater</option>
            <option value="sleeper">Sleeper</option>
            <option value="semi-sleeper">Semi-Sleeper</option>
          </select>
          <label className="checkbox-label">
            <input type="checkbox" id="ac-only" /> Show AC Buses only
          </label>
        </div>

        <div className="input-group">
          <label>Departure Date</label>
         
           
            <input type="date" id="calendar" />
          </div>
          <button className="search-btn" onClick={searchBuses}>Search Buses</button>
        </div>

       
   
    </section>
  );
}

export default Hero;
