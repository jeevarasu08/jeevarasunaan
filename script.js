// Default players data
const players = [
  { name: "Virat Kohli", country: "India", role: "Batsman", logo: "https://flagcdn.com/in.svg" },
  { name: "Steve Smith", country: "Australia", role: "Batsman", logo: "https://flagcdn.com/au.svg" },
  { name: "Joe Root", country: "England", role: "Batsman", logo: "https://flagcdn.com/gb-eng.svg" },
  { name: "Babar Azam", country: "Pakistan", role: "Batsman", logo: "https://flagcdn.com/pk.svg" },
  { name: "Kane Williamson", country: "New Zealand", role: "Batsman", logo: "https://flagcdn.com/nz.svg" },
  { name: "Rashid Khan", country: "Afghanistan", role: "Bowler", logo: "https://flagcdn.com/af.svg" },
  { name: "Shakib Al Hasan", country: "Bangladesh", role: "All-Rounder", logo: "https://flagcdn.com/bd.svg" },
  { name: "Ben Stokes", country: "England", role: "All-Rounder", logo: "https://flagcdn.com/gb-eng.svg" },
  { name: "David Miller", country: "South Africa", role: "Batsman", logo: "https://flagcdn.com/za.svg" },
  { name: "Lasith Malinga", country: "Sri Lanka", role: "Bowler", logo: "https://flagcdn.com/lk.svg" }
];

// Render players
function displayPlayers(list) {
  const container = document.getElementById("players");
  container.innerHTML = "";

  list.forEach(player => {
    const div = document.createElement("div");
    div.classList.add("player-card");
    div.innerHTML = `
      <div class="player-header">
        <img src="${player.logo}" alt="${player.country}">
        <span class="player-name">${player.name}</span>
      </div>
      <p class="player-country">🏳️ Country: ${player.country}</p>
      <p>🎯 Role: ${player.role}</p>
    `;
    container.appendChild(div);
  });
}

// Search player
function searchPlayer() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const results = players.filter(p => p.name.toLowerCase().includes(query));

  if (results.length > 0) {
    document.getElementById("notFound").classList.add("hidden");
    displayPlayers(results);
  } else {
    document.getElementById("players").innerHTML = "";
    document.getElementById("notFound").classList.remove("hidden");
  }
}

// Show default 10 players on load
displayPlayers(players);