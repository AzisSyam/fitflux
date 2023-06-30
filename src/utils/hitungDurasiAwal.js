export default hitungDurasiAwal = (
  detikDurasiAwal,
  menitDurasiAwal,
  setDetikDurasiAwal,
  setMenitDurasiAwal
) => {
  let durasi;
  durasi = setInterval(() => {
    setDetikDurasiAwal((detikDurasiAwal) => {
      if (detikDurasiAwal === 59) {
        setDetikDurasiAwal(0);
        setMenitDurasiAwal((menitDurasiAwal) => menitDurasiAwal + 1);
      } else {
        return detikDurasiAwal + 1;
      }
    });
  }, 1000);
  return () => clearInterval(waktu);
};
