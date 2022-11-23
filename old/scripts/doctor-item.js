const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");

const pageTitle = document.querySelector("title");
const doctorInfo = document.querySelector(".doctor-info");
const doctorImage = document.querySelector(".doctor-image>img");
const doctorBiography = document.querySelector(".doctor-biography");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getDoctor() {
  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/doctors/${articleId}?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/doctors/${articleId}?populate=*`;
  }

  fetch(tempBaseUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      attributes = result.data.attributes;

      pageTitle.textContent = attributes.doctorName;
      var tempPhotoUrl = "";
      if (isProd) {
        tempPhotoUrl = photoUrlProd;
      } else {
        tempPhotoUrl = photoUrlLocal;
      }
      doctorImage.src =
        tempPhotoUrl + attributes.doctorIcon.data.attributes.url;

      doctorBiography.insertAdjacentHTML(
        "afterbegin",
        attributes.doctorBiography
      );
    })
    .catch((error) => console.log("error", error));
}

getDoctor();
