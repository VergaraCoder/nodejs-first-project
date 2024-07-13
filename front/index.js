const $button = document.querySelector(".send");
const $inputName = document.querySelector(".name");
const $inputEmail = document.querySelector(".email");
const $inputAge = document.querySelector(".age");

async function enviar(url, data) {
  try {
    const request = await fetch(`${url}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!request.ok) {
      throw new Error("ALGO FALLA");
    }
    const response = await request.json();
    return response;
  } catch (err) {}
}

async function actualizar(url, data) {
  try {
    const request = await fetch(`${url}/tasks?id=1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!request.ok) {
      throw new Error("ALGO FALLA");
    }
    const response = await request.json();
    return response;
  } catch (err) {}
}

async function eliminar(url, data) {
  try {
    const request = await fetch(`${url}/tasks?id=2`, {
      method: "DELETE",
    });

    if (!request.ok) {
      throw new Error("ALGO FALLA");
    }
    const response = await request.json();
    return response;
  } catch (err) {}
}

const URLbase = "http://localhost:4000/";

$button.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = {
    name: $inputName.value,
    email: $inputEmail.value,
    age: $inputAge.value,
  };

  await enviar(URLbase, data);
});
