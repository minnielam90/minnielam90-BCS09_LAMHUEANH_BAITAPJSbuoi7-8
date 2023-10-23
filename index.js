// lấy dữ liệu
var numArray = [];
function getElementById(i) {
  return document.getElementById(i);
}
function getNumber() {
  var i = Number(document.getElementById("inputNum").value);
  numArray.push(i);
  getElementById("txtArray").innerHTML = numArray;
}

// 1. Tổng số dương
function sumPositive() {
  for (var i = 0, r = 0; r < numArray.length; r++)
    numArray[r] > 0 && (i += numArray[r]);
  getElementById("txtSum").innerHTML = "Tổng số dương: " + i;
}

// 2. Đếm số dương
function countPositive() {
  for (var i = 0, r = 0; r < numArray.length; r++) numArray[r] > 0 && i++;
  getElementById("txtCount").innerHTML = "Số lượng số dương: " + i;
}

// 3. Tìm số nhỏ nhất
function findMin() {
  for (var i = numArray[0], r = 1; r < numArray.length; r++)
    numArray[r] < i && (i = numArray[r]);
  getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + i;
}

// 4. Tìm số dương nhỏ nhất
function findMinPos() {
  for (var i = [], r = 0; r < numArray.length; r++)
    numArray[r] > 0 && i.push(numArray[r]);
  if (i.length > 0) {
    for (var e = i[0], r = 1; r < i.length; r++) i[r] < e && (e = i[r]);
    getElementById("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + e;
  } else getElementById("txtMinPos").innerHTML = "Không có số dương trong mảng";
}

// 5. Tìm số chẵn cuối cùng
function findEven() {
  var arrayChan = [];
  for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    if (element % 2 == 0) {
      arrayChan.push(element);
    }
  }
  var soChanCuoiCung = arrayChan[arrayChan.length - 1];
  var textCuoiCung = "Số chẵn cuối cùng : ";
  if (soChanCuoiCung % 2 !== 0) {
    soChanCuoiCung = -1;
    textCuoiCung = "Không có số chẵn : ";
  }

  getElementById("txtEven").innerHTML = textCuoiCung + soChanCuoiCung;
}

// 6. Đổi chỗ
function swap(i, r) {
  var doiCho = numArray[i];
  numArray[i] = numArray[r];
  numArray[r] = doiCho;
}

function changePosition() {
  swap(
    getElementById("inputIndex1").value,
    getElementById("inputIndex2").value
  ),
    (getElementById("txtChangePos").innerHTML =
      "Mảng sau khi đổi: " + numArray);
}

// 7. Sắp xếp tăng dần
function sortIncrease() {
  for (var i = 0; i < numArray.length; i++)
    for (var r = 0; r < numArray.length - 1; r++)
      numArray[r] > numArray[r + 1] && swap(r, r + 1);
  getElementById("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
}

// 8. Tìm số nguyên tố đầu tiên
function checkPrime(i) {
  if (i < 2) return !1;
  for (var r = 2; r <= Math.sqrt(i); r++) if (i % r == 0) return !1;
  return !0;
}
function findPrime() {
  for (var i = -1, r = 0; r < numArray.length; r++) {
    if (checkPrime(numArray[r])) {
      i = numArray[r];
      break;
    }
  }

  if (-1 !== i) {
    getElementById("txtPrime").innerHTML = "Số nguyên tố đầu tiên : " + i;
  } else {
    getElementById("txtPrime").innerHTML = "Không có số nguyên tố : -1";
  }
}

// 9. Đếm số nguyên
var arrayFloat = [];
function getFloat() {
  var i = Number(getElementById("inputFloat").value);
  arrayFloat.push(i), (getElementById("txtArrayFloat").innerHTML = arrayFloat);
}
function findInt() {
  for (var i = 0, r = 0; r < arrayFloat.length; r++)
    Number.isInteger(arrayFloat[r]) && i++;
  getElementById("txtInt").innerHTML = "Số lượng số nguyên: " + i;
}

// 10. So sánh số lượng số âm và dương
function compareNum() {
  for (var i = 0, r = 0, e = 0; e < numArray.length; e++)
    numArray[e] > 0 ? i++ : numArray[e] < 0 && r++;
  getElementById("txtCompare").innerHTML =
    i > r
      ? "Số lượng số dương > Số lượng số âm"
      : i < r
      ? "Số lượng số âm > Số lượng số dương"
      : "Số lượng số dương = Số lượng số âm";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.getElementById("collapseOne").classList.toggle("show");
}

function myFunction2() {
  document.getElementById("collapseTwo").classList.toggle("show");
}

function myFunction3() {
  document.getElementById("collapseThree").classList.toggle("show");
}

function myFunction4() {
  document.getElementById("collapseFour").classList.toggle("show");
}

function myFunction5() {
  document.getElementById("collapseFive").classList.toggle("show");
}

function myFunction6() {
  document.getElementById("collapseSix").classList.toggle("show");
}

function myFunction7() {
  document.getElementById("collapseSev").classList.toggle("show");
}

function myFunction8() {
  document.getElementById("collapseEig").classList.toggle("show");
}

function myFunction9() {
  document.getElementById("collapseNin").classList.toggle("show");
}

function myFunction10() {
  document.getElementById("collapseTen").classList.toggle("show");
}
