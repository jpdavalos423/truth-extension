document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const verifyButton = document.getElementById('verify-button');
    const loadingElement = document.getElementById('loading');
    const responseElement = document.getElementById('response');

    // Handle verify button click
    verifyButton.addEventListener('click', async function() {
        const text = textInput.value.trim();
        
        if (!text) {
            return;
        }

        // Show loading state
        loadingElement.style.display = 'block';
        verifyButton.disabled = true;
        responseElement.style.display = 'none';

        try {
            // TODO: Implement OpenAI API call here
            // For now, just simulate a response
            await new Promise(resolve => setTimeout(resolve, 1000));
            responseElement.textContent = 'This is a placeholder response. OpenAI API integration coming soon!';
            responseElement.style.display = 'block';
        } catch (error) {
            responseElement.textContent = 'An error occurred. Please try again.';
            responseElement.style.display = 'block';
        } finally {
            loadingElement.style.display = 'none';
            verifyButton.disabled = false;
        }
    });

    // Handle text input changes
    textInput.addEventListener('input', function() {
        verifyButton.disabled = !textInput.value.trim();
    });
});