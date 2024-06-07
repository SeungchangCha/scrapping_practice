document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm') as HTMLFormElement;
    const userId = document.getElementById('userId') as HTMLInputElement;
    const postContent = document.getElementById('postContent') as HTMLTextAreaElement;
    const postsList = document.getElementById('postsList') as HTMLUListElement;

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const id = userId.value.trim();
        const content = postContent.value.trim();
        const timestamp = new Date().toLocaleString();

        if (id && content) {
            const li = document.createElement('li');
            const postDetails = document.createElement('div');
            postDetails.innerHTML = `<strong>${id}</strong><span>${timestamp}</span><p>${content}</p>`;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', () => {
                postsList.removeChild(li);
            });
            
            li.appendChild(postDetails);
            li.appendChild(deleteButton);
            postsList.appendChild(li);

            userId.value = '';
            postContent.value = '';
        }
    });
});