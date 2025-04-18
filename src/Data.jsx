import './App.css';

function Header() {
    return (
        <header className='header'>
          <div className='container header-container'>
            <div className='logo'><span className='accent'>Unwrapped</span></div>
          </div>
        </header>
    );
}

function StatsHeader() {
    return (
        <div class="stats-header">
              <h1>Your <span class="stats accent">Listening Stats</span></h1>
              <p>Based on your Spotify activity over the last</p>
              <div class="duration">
                <button class="stats-length">4 Weeks</button>
                <button class="stats-length">6 Months</button>
                <button class="stats-length active">2024</button>
              </div>
        </div>
    );
}

function StatsTracks() {
    const tracks = [1, 2, 3, 4, 5];
    return (
        <div class="stats-card tracks">
            <h3>Top Tracks</h3>
            <div class="track-list">
                {tracks.map((_, i) => (
                    <div class="track-item" key={i}>
                        <div class="track-rank">{i+1}</div>
                        <div class="track-img"></div>
                        <div class="track-info">
                            <div class="track-name">Song</div>
                            <div class="track-artist">Artist</div>
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
}

function Data() {
    
    return (
      <>
        <div id="root">
          <Header />
          <main>
            <section className="stats-section">
              <div className="container">
                <StatsHeader />
                <div className="stats-grid">
                    <StatsTracks />
                </div>

              </div>
            </section>
            <ScrollConatiner />
            <section id="features" className="features">
              <Features />
            </section>
          </main>
          <Footer />
        </div>
  
      </>
    )
  }
  
  export default Data;