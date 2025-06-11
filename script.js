// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the div where pet information will be displayed
    const petInfoDiv = document.getElementById('pet-info');
    // Get the full path from the browser's URL bar (e.g., /pet/abc123 or /pet/)
    const path = window.location.pathname;

    // This is your mock data. In a real application, this would come from an API or database.
    const mockPetData = {
        'abc123': { name: 'Buddy', type: 'Dog', age: 3, breed: 'Golden Retriever', description: 'A friendly and energetic dog who loves to play fetch.' },
        'xyz789': { name: 'Whiskers', type: 'Cat', age: 2, breed: 'Siamese', description: 'A curious and cuddly cat, enjoys naps in sunbeams.' },
        'pqr456': { name: 'Hoppy', type: 'Rabbit', age: 1, breed: 'Dutch', description: 'A small, adorable rabbit who loves carrots and quiet spaces.' }
    };

    /**
     * Extracts the pet ID from the current URL path.
     * It assumes the URL format is '/pet/{petId}'.
     * For example, given '/pet/abc123', it returns 'abc123'.
     * @param {string} currentPath - The full URL path (e.g., '/pet/abc123').
     * @returns {string|null} The extracted pet ID, or null if no valid ID is found.
     */
    const getPetIdFromPath = (currentPath) => {
        // Split the path by '/' to get segments (e.g., ["", "pet", "abc123"])
        const parts = currentPath.split('/');
        // Find the index of the "pet" segment
        const petSegmentIndex = parts.indexOf('pet');

        // Check if "pet" segment exists and if there's a segment immediately after it
        // and if that segment is not empty (to handle '/pet/' vs '/pet/id')
        if (petSegmentIndex > -1 && parts.length > petSegmentIndex + 1 && parts[petSegmentIndex + 1]) {
            return parts[petSegmentIndex + 1]; // Return the segment after "pet"
        }
        return null; // Return null if no valid pet ID can be extracted
    };

    // Get the pet ID from the current URL
    const petId = getPetIdFromPath(path);

    // For debugging: print the path and extracted ID to the console
    console.log("Current URL path:", path);
    console.log("Extracted Pet ID:", petId);

    // --- Logic to display pet details based on the extracted ID ---
    if (petId) {
        // If a pet ID was successfully extracted from the URL
        const pet = mockPetData[petId]; // Try to find the pet in the mock data

        if (pet) {
            // If the pet ID exists in our mock data, display its details
            petInfoDiv.innerHTML = `
                <p><strong>ID:</strong> ${petId}</p>
                <p><strong>Name:</strong> ${pet.name}</p>
                <p><strong>Type:</strong> ${pet.type}</p>
                <p><strong>Age:</strong> ${pet.age} years</p>
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p class="description">${pet.description}</p>
            `;
        } else {
            // If an ID was found in the URL but the pet is NOT in the mockPetData
            petInfoDiv.innerHTML = `
                <p class="error-message">Pet with ID "${petId}" not found.</p>
                <p class="info-message">Please check the ID and try again.</p>
                <p class="info-message">Available IDs: abc123, xyz789, pqr456</p>
            `;
        }
    } else {
        // If no specific pet ID was found in the URL (e.g., path is just '/pet/' or '/')
        petInfoDiv.innerHTML = `
            <p class="warning-message">No specific pet ID provided in the URL.</p>
            <p class="info-message">Try accessing: <a href="/pet/abc123" class="link">/pet/abc123</a> or <a href="/pet/xyz789" class="link">/pet/xyz789</a></p>
        `;
    }
});
