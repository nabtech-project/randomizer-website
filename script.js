function generateTeams() {
    const inputField = document.getElementById("personInput");
    const teamSize = parseInt(document.getElementById("teamSize").value);
    const resultContainer = document.getElementById("teamResult");

    let people = inputField.value.split(',').map(person => person.trim()).filter(person => person.length > 0);

    if (people.length < 2) {
        resultContainer.innerHTML = "<p>Please enter at least two people.</p>";
        resultContainer.style.display = "block";
        return;
    }

    people = shuffleArray(people);

    const numberOfTeams = parseInt(document.getElementById("teamSize").value);
    const teams = [];
    const peoplePerTeam = Math.floor(people.length / numberOfTeams);
    const leftoverPeople = people.length % numberOfTeams;

    let index = 0;

    for (let i = 0; i < numberOfTeams; i++) {
        const teamSize = peoplePerTeam + (i < leftoverPeople ? 1 : 0);
        teams.push(people.slice(index, index + teamSize));
        index += teamSize;
    }

    const teamNames = [
        "Kings", "Champions", "Warriors", "Titans", "Knights", "Rangers",
        "Dragons", "Spartans", "Legends", "Mavericks", "Vikings"
    ];

    shuffleArray(teamNames);

    resultContainer.innerHTML = "<h3>Random Teams:</h3>";

    teams.forEach((team, index) => {
        const teamName = teamNames[index % teamNames.length];
        resultContainer.innerHTML += `<h4>${teamName}:</h4><ul>`;
        team.forEach(person => {
            resultContainer.innerHTML += `<li>${person}</li>`;
        });
        resultContainer.innerHTML += "</ul>";
    });

    resultContainer.style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
