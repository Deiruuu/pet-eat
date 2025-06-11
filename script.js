// script.js
document.addEventListener('DOMContentLoaded', () => {
    const petInfoDiv = document.getElementById('pet-info');
    const path = window.location.pathname; // Get the full path, e.g., /pet/abc123

    // Mock data for pets
    const mockPetData = {
        'abc123': { name: 'Buddy', type: 'Dog', age: 3, breed: 'Golden Retriever' },
        'xyz789': { name: 'Whiskers', type: 'Cat', age: 2, breed: 'Siamese' },
        'pqr456': { name: 'Hoppy', type: 'Rabbit', age: 1, breed: 'Dutch' }
    };

    /**
     * Extracts the pet ID from the current URL path.
     * Assumes the ID is the segment immediately following '/pet/'.
     * @param {string} currentPath - The full URL path (e.g., '/pet/abc123').
     * @returns {string|null} The extracted pet ID, or null if not found.
     */
    const getPetIdFromPath = (currentPath) => {
        const parts = currentPath.split('/');
        // Find the index of 'pet' and get the next segment
        const petIndex = parts.indexOf('pet');
        if (petIndex > -1 && parts.length > petIndex + 1) {
            return parts[petIndex + 1]; // This should be the ID like 'abc123'
        }
        return null; // No pet ID found
    };

    const petId = getPetIdFromPath(path);
    console.log("Current path:", path);
    console.log("Extracted Pet ID:", petId);

    if (petId) {
        const pet = mockPetData[petId];
        if (pet) {
            // Display pet details by updating the inner HTML of the petInfoDiv
            petInfoDiv.innerHTML = `
                <p class="mb-2"><strong class="font-semibold">ID:</strong> ${petId}</p>
                <p class="mb-2"><strong class="font-semibold">Name:</strong> ${pet.name}</p>
                <p class="mb-2"><strong class="font-semibold">Type:</strong> ${pet.type}</p>
                <p class="mb-2"><strong class="font-semibold">Age:</strong> ${pet.age} years</p>
                <p class="mb-2"><strong class="font-semibold">Breed:</strong> ${pet.breed}</p>
            `;
        } else {
            // Pet not found in mock data, display an error message
            petInfoDiv.innerHTML = `
                <p class="text-center text-red-600 font-semibold">Pet with ID "${petId}" not found.</p>
                <p class="text-center text-gray-500 mt-2">Please check the ID and try again.</p>
            `;
        }
    } else {
        // No pet ID found in the URL, or the path is not as expected, display instructions
        petInfoDiv.innerHTML = `
            <p class="text-center text-orange-500 font-semibold">No pet ID provided in the URL.</p>
            <p class="text-center text-gray-500 mt-2">Example: /pet/abc123</p>
        `;
    }
});
