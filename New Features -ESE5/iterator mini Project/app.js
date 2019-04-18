const data = [
    {
        name: 'Jhon Doe',
        age: '32',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Smith',
        age: '26',
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Jake Doson',
        age: '27',
        gender: 'male',
        lookingFor: 'female',
        location: 'Bevarly Hills, LA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? {
                value :profiles[nextIndex++],
                doen: false
            } : {
                done: true
            }
        }
    }

}

const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Call First Profile
nextProfile();


function nextProfile(){

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){

        document.getElementById('profile-display').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">looking For: ${currentProfile.lookingFor}</li>
        </ul>
    `;

    document.getElementById('image-display').innerHTML = `
        <img src="${currentProfile.image}">
    `;

    }else{
        window.location.reload();
    }

}