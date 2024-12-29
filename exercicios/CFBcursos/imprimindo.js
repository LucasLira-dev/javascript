const btn_imp= document.getElementById("btn_imp")

btn_imp.addEventListener("click", ()=>{
    const conteudo= document.getElementById("tabela").innerHTML

    let estilo= "<style> table{ width: 100%; font: 25px Calibri; border-collapse: collapse;} td, th{border: 1px solid black; padding: 8px; text-align: center;} </style>"

    const win= window.open('', '', "height=700, width=700")

    win.document.write("<html> <head>")
    win.document.write("<title> CFB Cursos </title>")
    win.document.write(estilo)
    win.document.write("</head> <body>")
    win.document.write(conteudo)
    win.document.write("</body> </html>")

    win.print()
    win.close()
})

