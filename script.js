function generarQR() {
  const texto = document.getElementById('text').value.trim();
  const canvas = document.getElementById('qrcode');
  if (!texto) return alert('Escribe algo primero');
  QRCode.toCanvas(canvas, texto, { width: 256 }, err => {
    if (err) console.error(err);
  });
}
