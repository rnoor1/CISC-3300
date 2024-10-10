
     document.addEventListener('DOMContentLoaded', () => {
        
    document.querySelectorAll('#click-list li').forEach(item => {
    item.addEventListener('click', () => {
    document.querySelectorAll('#click-list li').forEach(li => {
    li.style.color = 'blue';
            
});
        });
    });

    
    const cats = [
        { name: 'Charlie', adoptionStatus: 'available' },
        { name: 'Lily', adoptionStatus: 'not-available' },
        { name: 'Coco', adoptionStatus: 'available' },
        { name: 'Oreo', adoptionStatus: 'not-available' },
        { name: 'Luna', adoptionStatus: 'available' },
        { name: 'Milo', adoptionStatus: 'available' },
        { name: 'Lola', adoptionStatus: 'not-available' },
        { name: 'Leo', adoptionStatus: 'available' },
        { name: 'Willow', adoptionStatus: 'available' },
        { name: 'Bella', adoptionStatus: 'not-available' },
        { name: 'Max', adoptionStatus: 'available' },
        { name: 'Cleo', adoptionStatus: 'available' },
        { name: 'Lucy', adoptionStatus: 'not-available' },
        { name: 'Daisy', adoptionStatus: 'available' },
    ];

    const cat = { name: "Pinecone", age: 13, type: 'Munchkin', cuteness: 9001 };

    
    const catsList = document.getElementById('cats-list');
    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = `${cat.name} - Adoption Status: ${cat.adoptionStatus}`;
        
       
        li.classList.add(cat.adoptionStatus === 'available' ? 'available' : 'not-available');
        
        catsList.appendChild(li);
    });

    
    console.log(`Meet Pinecone! Name: ${cat.name}, Age: ${cat.age}, Type: ${cat.type}, Cuteness: ${cat.cuteness}`);

   
    const form = document.getElementById('my-form');
    const input = document.getElementById('user-input');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();  
        
        
        messageDiv.innerHTML = '';

        if (input.value.trim() === '') {
            
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            errorMessage.textContent = 'Please Provide a Value';
            messageDiv.appendChild(errorMessage);
        } else {
            
            const successMessage = document.createElement('div');
            successMessage.classList.add('success');
            successMessage.textContent = 'Success';
            messageDiv.appendChild(successMessage);

            console.log(input.value);  
        }
    });
});
