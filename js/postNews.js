// Ar8nONWRwM6_8psXx3kSu3C8Oku2vpoQB-EOCcKI3Ag

// HwuzOQpGlvrm2uvwZq6-As66yAbvTQuKFOG9oLZ2DBc

API.get("auth/me", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {})
  .catch((err) => {
    window.location.href = "index.html";
  });

ClassicEditor.create(document.querySelector("#content")).catch((error) => {
  console.error(error);
});

const thumb = document.getElementById("thumb");
const title = document.getElementById("title");
const description = document.getElementById("description");
const categoryId = document.getElementById("category_id");
const content = document.getElementById("content");
const updateData = document.getElementById("my-form");
const elMessage = document.getElementById("message");
const previewThumb = document.getElementById("thumb-preview");
const btnRandom = document.getElementById("random-thumb");

btnRandom.addEventListener("click", () => {
  axios
    .get(
      "https://api.unsplash.com/photos/random?orientation=landscape&client_id=Ar8nONWRwM6_8psXx3kSu3C8Oku2vpoQB-EOCcKI3Ag"
    )
    .then((res) => {
      const urlImg = res.data.urls.regular;
      previewThumb.src = urlImg;
      thumb.value = urlImg;
    });
});

thumb.addEventListener("change", () => {
  const url = thumb.value.trim();
  previewThumb.src = url;
});

updateData.addEventListener("submit", (e) => {
  e.preventDefault();
  API.post(
    "/articles/create",
    {
      thumb: thumb.value.trim(),
      title: title.value.trim(),
      description: description.value.trim(),
      category_id: categoryId.value.trim(),
      content: content.value.trim(),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => {
      elMessage.innerHTML = /*html */ `
    <div class="alert alert-success alert-icon alert-dismissible fade show" role="alert">
      <i class="uil uil-times-circle"></i> Đăng Bài Thành Công
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    })
    .catch((err) => {
      const errors = err.response.data.errors;
      let message = "";

      for (const key in errors) {
        message += `<p class="mb-0">${errors[key][0]}</p>`;
      }

      elMessage.innerHTML = /*html */ `
      <div class="alert alert-danger alert-icon alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    });
});
