const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const subject = form.elements.subject.value;
  const message = form.elements.message.value;

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const result = await response.json();

    if (result.success) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('There was an error sending the message. Please try again later.');
    }
  } catch (error) {
    console.error(error);
    alert('There was an error sending the message. Please try again later.');
  }
});
