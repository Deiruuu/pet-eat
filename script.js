// Mock pet data
const pets = {
  'abc123': {
    name: 'Buddy',
    type: 'Dog',
    age: 2,
    birthdate: '2022-05-10',
    breed: 'Labrador',
    sex: 'Male',
    image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=256&h=256',
    medicalInfo: 'No known allergies',
    clinic: 'Healthy Pets Center',
  },
  'def456': {
    name: 'Mittens',
    type: 'Cat',
    age: 3,
    birthdate: '2021-03-15',
    breed: 'Siamese',
    sex: 'Female',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256',
    medicalInfo: 'Annual vaccination completed',
    clinic: 'PawCare Clinic',
  },
  'ghi789': {
    name: 'Rex',
    type: 'Dog',
    age: 5,
    birthdate: '2019-02-20',
    breed: 'German Shepherd',
    sex: 'Male',
    image: 'https://images.unsplash.com/photo-1518715308788-3005759c61d4?auto=format&fit=facearea&w=256&h=256',
    medicalInfo: 'Healthy overall condition',
    clinic: 'City Vet Clinic',
  }
};

function getPetIdFromPath() {
  const match = window.location.pathname.match(/\/pet\/([\w-]+)/);
  return match ? match[1] : null;
}

function renderPet(pet) {
  return `
    <div class="card">
      <img src="${pet.image}" alt="${pet.name}">
      <h2>${pet.name}</h2>
      <div class="pet-info">${pet.type} • ${pet.breed}</div>
      <div class="pet-info">${pet.sex} • Age: ${pet.age} (${pet.birthdate})</div>
      <div class="medical">🧾 ${pet.medicalInfo}</div>
      <div class="clinic">🏥 ${pet.clinic}</div>
    </div>
  `;
}

function renderNotFound() {
  return `<div class="not-found">❌ Pet not found.<br>Check the NFC tag or contact the clinic.</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const petId = getPetIdFromPath();
  const app = document.getElementById('app');
  if (petId && pets[petId]) {
    app.innerHTML = renderPet(pets[petId]);
  } else {
    app.innerHTML = renderNotFound();
  }
});
