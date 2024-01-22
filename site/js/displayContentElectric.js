async function fetchDataAndReplaceContent() {
  try {
    const response = await fetch('http://localhost:8080/api/tutorials/type/Electric');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const varietyContainer = document.getElementById('Electric');
    // Iterate through the data and create content for each item
    data.forEach(item => {
      const newItemHTML = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 wow fadeInLeft">
          <a class="variety-box-wrapper">
            <figure class="variety-box">
              <div class="variety-media">
                <img src="${item.imageURL}" alt="${item.name}" width="200px" height="200px" />
              </div>
              <figcaption>
                <span><input type="button" class="btnGuitarName" onclick="showProductDetails('${item.name}', '${item.price}', '${item.imageURL}')" value="${item.name}"></button></span>
                <p>${item.price} $</p>
              </figcaption>
            </figure>
          </a>
        </div>
      `;
      
      // Append each new item HTML to the variety container
      varietyContainer.innerHTML += newItemHTML;
    });
  } catch (error) {
    console.error('Error fetching and replacing content:', error);
  }
}

function showProductDetails(productName, productPrice, productImageURL){
  sessionStorage.setItem("productName", productName);
  sessionStorage.setItem("productPrice", productPrice);
  sessionStorage.setItem("productImageURL", productImageURL);
  window.location = "productDetails.html";
}

// Call the function to fetch data and replace content
fetchDataAndReplaceContent();