import QRCode from "qrcode";
import jsPDF from "jspdf";

const generateQrDataURL = async (text) => {
  try {
    const url = await QRCode.toDataURL(text, { width: 200 });
    return url;
  } catch (err) {
    console.error("Erro ao gerar QRCode:", err);
    return null;
  }
};

export const GeneratePdf = async (eventoNome, projetos) => {
  if (!projetos || projetos.length === 0) {
    alert("Não há projetos para esse evento.");
    return;
  }

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  const qrSize = 63;
  const spacingX = 30;
  const spacingY = 30;

  const marginX = 25;
  const marginY = 40;

  let x = marginX;
  let y = marginY + 20;
  let count = 0;

  const addPageHeader = () => {
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(eventoNome, pageWidth / 2, 20, { align: "center" });

    doc.setDrawColor(200);
    doc.line(marginX, 25, pageWidth - marginX, 25);
  };

  addPageHeader();

  for (let i = 0; i < projetos.length; i++) {
    const projeto = projetos[i];

    let qrData;
    try {
      qrData = JSON.parse(projeto.qrcode);
    } catch (err) {
      console.error("QR inválido ou não é JSON:", projeto.qrcode);
      continue;
    }

    const qrImage = await generateQrDataURL(projeto.qrcode);
    const projetoNome = qrData.nome || "Projeto sem nome";

    if (qrImage) {
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Projeto: ${projetoNome}`, x, y + qrSize + 5, { maxWidth: 80 });
      doc.addImage(qrImage, "PNG", x, y, qrSize, qrSize);

      count++;

      if (count % 4 === 0 && i < projetos.length - 1) {
        doc.addPage();
        addPageHeader();
        x = marginX;
        y = marginY + 20;
        continue;
      }

      if (count % 2 === 0) {
        x = marginX;
        y += qrSize + spacingY;
      } else {
        x += qrSize + spacingX;
      }
    }
  }

  doc.save(`QRCodes_${eventoNome}.pdf`);
};
