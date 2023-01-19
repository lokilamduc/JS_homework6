const mangNumber = [];

document.getElementById("themSo").onclick = function () {
  let number = +document.getElementById("number").value;
  mangNumber.push(number);

  document.getElementById("result-wrapper").style.display = "block";
  document.getElementById("result").innerHTML = mangNumber + ", ";
};

//bài 1
document.getElementById("tinhTong").onclick = function () {
  let sum = 0;
  for (let i = 0; i < mangNumber.length; i++) {
    sum += mangNumber[i];
  }

  document.getElementById("result1-wrapper").style.display = "block";
  document.getElementById("result1").innerHTML = sum;
};

//bài 2
document.getElementById("demSo").onclick = function () {
  let count = 0;

  for (let i = 0; i < mangNumber.length; ++i) {
    if (mangNumber[i] > 0) {
      count++;
    }
  }
  document.getElementById("result2-wrapper").style.display = "block";
  document.getElementById("result2").innerHTML = count;
};

//bài 3
document.getElementById("soNhoNhat").onclick = function () {
  let min = mangNumber[0];
  let min_index = 0;
  for (let i = 1; i < mangNumber.length; ++i) {
    if (min > mangNumber[i]) {
      min = mangNumber[i];
      min_index = i;
    }
  }
  document.getElementById("result3-wrapper").style.display = "block";
  document.getElementById("result3").innerHTML = min;
};

//bài 4
document.getElementById("soDuongNhoNhat").onclick = function () {
  let minDuong = mangNumber[0];
  for (let i = 0; i < mangNumber.length; i++) {
    if (mangNumber[i] > 0) {
      minDuong = mangNumber[i];
      break;
    }
  }
  document.getElementById("result4-wrapper").style.display = "block";
  document.getElementById("result4").innerHTML = minDuong;
};

//bài 5
document.getElementById("soChanCuoiCung").onclick = function () {
  let soChans = mangNumber.filter((value) => {
    return value % 2 === 0;
  });
  let soChanCuoiCung = [];
  if (soChans.length === 0) {
    soChanCuoiCung = -1;
  } else {
    soChanCuoiCung = soChans[soChans.length - 1];
  }

  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = soChanCuoiCung;
};

//bài 6
document.getElementById("doiCho").onclick = function () {
  let numberX = +document.getElementById("numberX").value;
  let numberY = +document.getElementById("numberY").value;

  let newnumbers = [...mangNumber];

  let tem = newnumbers[numberX];
  newnumbers[numberX] = newnumbers[numberY];
  newnumbers[numberY] = tem;

  document.getElementById("result6-wrapper").style.display = "block";
  document.getElementById("result6").innerHTML = newnumbers;
};

//bài 7
document.getElementById("sapXep").onclick = function () {
  mangNumber.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("result7-wrapper").style.display = "block";
  document.getElementById("result7").innerHTML = mangNumber;
};

//bài 8
document.getElementById("soNguyenTo").onclick = function () {
  let soNguyenTo = "";

  for (let i = 0; i < mangNumber.length; i++) {
    let kiemTraSNT = checkSNT(mangNumber[i]);
    if (kiemTraSNT && mangNumber[i] > 1) {
      soNguyenTo = mangNumber[i];
      break;
    } else {
      soNguyenTo = "-1";
    }
  }

  function checkSNT(number) {
    let soNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(mangNumber); i++) {
      if (mangNumber % i === 0) {
        soNguyenTo = false;
        break;
      }
    }
    return soNguyenTo;
  }
  document.getElementById("result8-wrapper").style.display = "block";
  document.getElementById("result8").innerHTML =
    "Số nguyên tố đầu tiên: " + soNguyenTo;
};

//bài 9
const numBai9s = [];
document.getElementById("themSoB9").onclick = function () {
  let numberB9 = +document.getElementById("numberB9").value;
  numBai9s.push(numberB9);
  console.log(numBai9s);
  document.getElementById("resultNumberB9").innerHTML = numBai9s + ", ";
};

document.getElementById("demSoNguyen").onclick = function () {
  let dem = 0;
  for (let i = 0; i < numBai9s.length; i++) {
    let checkSoNguyen = Number.isInteger(numBai9s[i]);
    if (checkSoNguyen) {
      dem++;
    }
  }

  document.getElementById("result9-wrapper").style.display = "block";
  document.getElementById("result9").innerHTML =
    "Số nguyên trong mảng là : " + dem;
};

//bài 10
document.getElementById("soSanh").onclick = function () {
  let soDuong = 0;
  let soAm = 0;
  let result = "";
  for (let i = 0; i < mangNumber.length; i++) {
    if (mangNumber[i] > 0) {
      soDuong++;
    }
    if (mangNumber[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    result = "Số dương > Số âm";
  } else if (soDuong < soAm) {
    result = "Số dương < Số âm";
  } else {
    result = "Số âm = Số dương";
  }
  document.getElementById("result10-wrapper").style.display = "block";
  document.getElementById("result10").innerHTML = result;
};
