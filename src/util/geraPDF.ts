import html2canvas from "html2canvas"
import jsPDF from "jspdf"

const geraPDF = () => {


    const conteudo = document.getElementById('conteudo-relatorio') as HTMLElement

    html2canvas(conteudo).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width

        const cabecalho = 'Cabeçalho'
        const  rodape = 'Conmac'
        const margem = 10

        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        
        pdf.setFontSize(12)
        pdf.text(cabecalho, pdfWidth / 2, margem, {align: 'center'})

        pdf.setFontSize(8);
        pdf.text(rodape, pdfWidth / 2, pdf.internal.pageSize.getHeight() - margem / 2, {align: 'center'})

        pdf.save('Relatorio.pdf')

    }).catch((error) => {
        console.log('Erro so gerar PDF.' + error)
        
    })
}

export default geraPDF