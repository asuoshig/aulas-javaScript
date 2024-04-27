 const consumomedio = () => {
                const kminicial = parseFloat(document.getElementById("kminicial").value);
                const kmatual = parseFloat(document.getElementById("kmatual").value);
                const abastecido = parseFloat(document.getElementById("alcool").value);

                var consumomedio = ((kmatual- kminicial)/abastecido);

                 
                alert("o consumo médio é") + consumomedio;
                
            }

            const comparacao = () => {
                const gasolina = parseFloat(document.getElementById("gasolina").value);
                const alcool = parseFloat(document.getElementById("alcool").value);

                var diferenca = ((gasolina-alcool)/gasolina) * 100;
                
                if (diferenca >= 70) {
                    alert("A gasolina é mais viável.");
                }
                else if (diferenca < 70) {
                    alert("O álcool é mais viável");
                }
                else (diferenca = isNaN) => {
                    alert("Por favor, informe o preço do alcool e da gasolina.");
                }

            }
