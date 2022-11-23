const doctorsPath = "/doctors?populate=*";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function getDoctors() {
  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = apiUrlProd;
  } else {
    tempBaseUrl = apiUrlLocal;
  }

  tempBaseUrl += doctorsPath;

  fetch(tempBaseUrl, requestOptions)
    .then((response) => response.json())
    .then((doctors) => {
      let doctorList = document.querySelector(".doctor-list");
      doctors.data.forEach((doctorItem) => {
        doctorList.appendChild(createDoctorCard(doctorItem));
      });
    })
    .catch((error) => console.log("error", error));
}

function createDoctorCard(doctorItem) {
  let card = document.createElement("li");
  card.classList.add("doctor-item");
  card.onclick = () => {
    window.location.assign(
      `${window.origin}/doctors/doctor.html?id=${doctorItem.id}`
    );
  };

  let doctorImg = document.createElement("img");
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }
  doctorImg.src =
    tempPhotoUrl + doctorItem.attributes.doctorIcon.data.attributes.url;
  card.append(doctorImg);

  let doctorName = document.createElement("p");
  doctorName.classList.add("doctor-name");
  doctorName.textContent = doctorItem.attributes.doctorName;

  let doctorPosition = document.createElement("p");
  doctorPosition.classList.add("doctor-position");
  doctorPosition.textContent = doctorItem.attributes.doctorPosition;

  card.append(doctorName);
  card.append(doctorPosition);

  return card;
}

getDoctors();
