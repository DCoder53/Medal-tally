try {
  const response = await fetch('https://api.worldarchery.sport/v3/ATHLETEBIOGRAPHY/?Id=20955&CatId=INTEGER&CatCode=STRING&CompFormatId=INTEGER&CompSubFormatId=INTEGER&Detailed=true');
  const data = await response.json();
  
  const items = data.items;
  const athleteDataDiv = document.getElementById('athlete-data');
  
  if (items && items.length > 0) {
    const firstItem = items[0];
    
    const headerImage = firstItem.HeaderImage || 'No Header Image Available';
    const profilePicture = firstItem.ProfilePicture || 'No Profile Picture Available';
    const worldRankings = firstItem.WorldRankings || 'No World Rankings Available';
    const athleteCategories = firstItem.AthleteCategories;

    // Display Header Image
    const headerImageElement = document.createElement('img');
    headerImageElement.src = headerImage !== 'No Header Image Available' ? headerImage : '';
    headerImageElement.alt = 'Header Image';
    athleteDataDiv.appendChild(headerImageElement);
    
    // Display Profile Picture
    const profilePictureElement = document.createElement('img');
    profilePictureElement.src = profilePicture !== 'No Profile Picture Available' ? profilePicture : '';
    profilePictureElement.alt = 'Profile Picture';
    athleteDataDiv.appendChild(profilePictureElement);

    // Display World Rankings
    const worldRankingsElement = document.createElement('p');
    worldRankingsElement.textContent = `World Rankings: ${worldRankings}`;
    athleteDataDiv.appendChild(worldRankingsElement);
    
    // Display Athlete Categories
    athleteCategories.forEach(ath => {
      const categoryElement = document.createElement('div');
      categoryElement.innerHTML = `
        <p>CatId: ${ath.CatId}</p>
        <p>Cat: ${ath.Cat}</p>
        <p>Is Team: ${ath.isTeam}</p>
        <p>Divisions: ${ath.Divisions.join(', ')}</p>
        <p>Individual Team: ${ath.IndividualTeam}</p>
      `;
      athleteDataDiv.appendChild(categoryElement);
    });
  } else {
    athleteDataDiv.textContent = 'No items found';
  }
} catch (error) {
  console.error('Error fetching data:', error.message);
  document.getElementById('athlete-data').textContent = 'Error fetching data';
}
