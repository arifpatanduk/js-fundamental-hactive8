// 1.Membuat fungsi yang menggunakan callback dengan API
const fetchData = (url, callback) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

// 2.Membuat fungsi yang menggunakan promise dengan API
// Fungsi callback yang akan dipanggil setelah mendapatkan data dari API
function handleData(error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data from API:", data);
  }
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(apiUrl, handleData);

// Exercise callback & promise 2
// Fungsi untuk melakukan permintaan ke API dengan menggunakan Promise
function fetchData2(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchData2(apiUrl)
  .then((data) => {
    console.log("Data from API:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function fetchData3(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

// Exercise Promise chaining API
const apiUrl3 = "https://jsonplaceholder.typicode.com/posts/1";

fetchData3(apiUrl3)
  .then((postData) => {
    console.log("Post Data:", postData);
    return fetchData3(
      `https://jsonplaceholder.typicode.com/comments?postId=${postData.id}`
    );
  })
  .then((commentData) => {
    console.log("Comment Data:", commentData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
