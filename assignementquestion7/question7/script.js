const Form = document.getElementById("form") ;
const livePreviewContent = document.getElementById("livepreviewcontent");


const updateLivePreview = ()=> {
    const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const imageUrl = document.getElementById("image-url").value;
      const authorName = document.getElementById("authorname").value;

      livePreviewContent.innerHTML = `<div class="Previewcontainer">
      <div class="image">
          <img src="${imageUrl}" alt="Product Image"  class="ig1">
      </div>
      <div class="words">
          <h3> ${title} </h3>
          <p>${description}</p>
          <button class="btn1">Written by ${authorName}</button>
      </div>
  </div>`;
};

Form.addEventListener('input',updateLivePreview);

