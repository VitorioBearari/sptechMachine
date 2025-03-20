function converter(){
    var decimal = Number(ipt_decimal.value)

    div_octal.innerHTML = "Octal: "
    div_octal.innerHTML += decimal.toString(8)

    div_hexa.innerHTML = "Hexadecimal: "
    div_hexa.innerHTML += decimal.toString(16)

    div_binario.innerHTML = "Binário: "
    div_binario.innerHTML += decimal.toString(2)
    }