const convertBtn = document.querySelector("#convert-btn");

const numberEnter = document.querySelector("#number");

const outPut = document.getElementById("output");

const romanNumerals = {
	1000: "M",
	900: "CM",
	500: "D",
	400: "CD",
	100: "C",
	90: "XC",
	50: "L",
	40: "XL",
	10: "X",
	9: "IX",
	5: "V",
	4: "IV",
	1: "I",
};

convertBtn.addEventListener("click", () => {
	if (numberEnter.value === "") {
		outPut.classList.remove("noVisible");
		outPut.classList.add("visibleNow");
		outPut.innerHTML = "Please enter a valid number";
	} else {
		if (Number(numberEnter.value) < 0) {
			outPut.classList.remove("noVisible");
			outPut.classList.add("visibleNow");
			outPut.innerHTML = "Please enter a number greater than or equal to 1";
		} else {
			outPut.style.visibility = "visible";
			outPut.innerHTML = convertToRomanNumeral(numberEnter.value);
		}
	}
});

numberEnter.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		outPut.style.visibility = "visible";
		e.preventDefault();
		outPut.innerHTML = convertToRomanNumeral(numberEnter.value);
	}
});

const convertToRomanNumeral = (arabicNumber) => {
	if (Number(arabicNumber) === 1) {
		return "I";
	} else {
		if (Number(arabicNumber) < 4) {
			return convertToRomanNumeral(Number(arabicNumber) - 1) + "I";
		} else if (Number(arabicNumber) < 9) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "V" + convertToRomanNumeral(Number(arabicNumber) - 5);
		} else if (Number(arabicNumber) < 40) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "X" + convertToRomanNumeral(Number(arabicNumber) - 10);
		} else if (Number(arabicNumber) < 50) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "XL" + convertToRomanNumeral(Number(arabicNumber) - 40);
		} else if (Number(arabicNumber) < 90) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "L" + convertToRomanNumeral(Number(arabicNumber) - 50);
		} else if (Number(arabicNumber) < 100) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "XC" + convertToRomanNumeral(Number(arabicNumber) - 90);
		} else if (Number(arabicNumber) < 400) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "C" + convertToRomanNumeral(Number(arabicNumber) - 100);
		} else if (Number(arabicNumber) < 500) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "CD" + convertToRomanNumeral(Number(arabicNumber) - 400);
		} else if (Number(arabicNumber) < 900) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "D" + convertToRomanNumeral(Number(arabicNumber) - 500);
		} else if (Number(arabicNumber) < 1000) {
			return romanNumerals.hasOwnProperty(Number(arabicNumber))
				? romanNumerals[Number(arabicNumber)]
				: "CM" + convertToRomanNumeral(Number(arabicNumber) - 900);
		} else {
			if (Number(arabicNumber) >= 4000) {
				outPut.classList.remove("noVisible");
				outPut.classList.add("visibleNow");
				outPut.innerHTML = "Please enter a number less than or equal to 3999";
				setTimeout(() => {
					outPut.style.visibility = "hidden";
					outPut.classList.remove("visibleNow");
					outPut.classList.add("stylingOutput");
				}, 2000);
				return outPut.innerHTML;
			} else {
				return romanNumerals.hasOwnProperty(Number(arabicNumber))
					? romanNumerals[Number(arabicNumber)]
					: "M" + convertToRomanNumeral(Number(arabicNumber) - 1000);
			}
		}
	}
};
