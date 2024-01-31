const defaultValue = {
  availability: "Full time",
  usia: "23 Tahun",
  lokasi: "Jakarta Selatan",
  pengalaman: "3 Tahun",
  email: "arifpatanduk1@gmail.com",
  role: "Fulstack Developer",
};

const setDefault = () => {
  Object.entries(defaultValue).forEach(([key, value]) => {
    document.getElementById(key).textContent = localStorage.getItem(key);
  });
};

setDefault();

const closeForm = () => {
  var card = document.getElementById("editForm");
  var editButton = document.getElementById("editButton");

  card.style.display = "none";
  editButton.textContent = "Edit";
  editButton.classList.remove("btn-danger");
  editButton.classList.add("btn-primary");
};

const openForm = () => {
  var card = document.getElementById("editForm");
  var editButton = document.getElementById("editButton");

  card.style.display = "block";
  editButton.textContent = "Cancel";
  editButton.classList.remove("btn-primary");
  editButton.classList.add("btn-danger");
};

const editForm = () => {
  checkAndSetDefaults();
  var card = document.getElementById("editForm");

  if (card.style.display === "none") {
    openForm();
  } else {
    closeForm();
  }

  Object.entries(defaultValue).forEach(([key, value]) => {
    document.getElementById(`${key}-input`).value = localStorage.getItem(key);
  });
};

const checkAndSetDefaults = () => {
  Object.entries(defaultValue).forEach(([key, value]) => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, value);
    }
  });
};

const saveChanges = () => {
  if (!validateForm()) return;

  Object.entries(defaultValue).forEach(([key, value]) => {
    // set item to localstorage
    localStorage.setItem(key, document.getElementById(`${key}-input`).value);

    // get item from local storage and set it to view
    document.getElementById(key).textContent = localStorage.getItem(key);
  });

  closeForm();
};

const validateForm = () => {
  var isValid = true;

  Object.entries(defaultValue).forEach(([key, value]) => {
    var field = document.getElementById(key + "-input");
    var errorDiv = document.getElementById(key + "Error");

    // Check if the field is empty
    if (field.value.trim() === "") {
      isValid = false;
      field.classList.add("is-invalid");
      errorDiv.textContent = "This field is required.";
    } else {
      errorDiv.textContent = "";
      field.classList.remove("is-invalid");
    }
  });

  return isValid;
};
