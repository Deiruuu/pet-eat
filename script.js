    // script.js
    document.addEventListener('DOMContentLoaded', () => {
        const petInfoDiv = document.getElementById('pet-info');
        const path = window.location.pathname;

        const mockPetData = {
            'abc123': { name: 'Buddy', type: 'Dog', age: 3, breed: 'Golden Retriever', description: 'A friendly and energetic dog who loves to play fetch.' },
            'xyz789': { name: 'Whiskers', type: 'Cat', age: 2, breed: 'Siamese', description: 'A curious and cuddly cat, enjoys naps in sunbeams.' },
            'pqr456': { name: 'Hoppy', type: 'Rabbit', age: 1, breed: 'Dutch', description: 'A small, adorable rabbit who loves carrots and quiet spaces.' }
        };

        const getPetIdFromPath = (currentPath) => {
            const parts = currentPath.split('/');
            const petSegmentIndex = parts.indexOf('pet');

            if (petSegmentIndex > -1 && parts.length > petSegmentIndex + 1 && parts[petSegmentIndex + 1]) {
                const potentialId = parts[petSegmentIndex + 1];
                if (potentialId) {
                    return potentialId;
                }
            }
            return null;
        };

        const petId = getPetIdFromPath(path);

        console.log("Current URL path:", path);
        console.log("Extracted Pet ID:", petId);

        if (petId) {
            const pet = mockPetData[petId];

            if (pet) {
                petInfoDiv.innerHTML = `
                    <p><strong>ID:</strong> ${petId}</p>
                    <p><strong>Name:</strong> ${pet.name}</p>
                    <p><strong>Type:</strong> ${pet.type}</p>
                    <p><strong>Age:</strong> ${pet.age} years</p>
                    <p><strong>Breed:</strong> ${pet.breed}</p>
                    <p class="description">${pet.description}</p>
                `;
            } else {
                petInfoDiv.innerHTML = `
                    <p class="error-message">Pet with ID "${petId}" not found.</p>
                    <p class="info-message">Please check the ID and try again.</p>
                    <p class="info-message">Available IDs: abc123, xyz789, pqr456</p>
                `;
            }
        } else {
            petInfoDiv.innerHTML = `
                <p class="warning-message">No specific pet ID provided in the URL.</p>
                <p class="info-message">Try accessing: <a href="/pet/abc123" class="link">/pet/abc123</a> or <a href="/pet/xyz789" class="link">/pet/xyz789</a></p>
            `;
        }
    });
    
