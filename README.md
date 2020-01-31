# bhaktitud.github.io

This puzzle game is still "buggy"...

Rules of gameplay :
1. There should no repeatition number on its vertical and horizontal list
2. There should no repeatition number on sub-grids (3x3)

//Technical Explanation :

1. Grid di buat menggunakan tabel dan input element secara manual dengan total 81 cells.
2. Program akan me-reset angka yang ada di dalam cells setiap kali refresh page dilakukan atau player menekan tombol reset yang ada di dalam game.
3. Untuk memulai game, player harus menekan tombol start, tombol start akan membuka setiap cells yang kosong aga player dapat mengisinya. Sejalan dengan itu, timer pun akan berjalan.
4. Jika player sudah mengisi semua cell yang kosong, player dapat menekan tombol 'check result' untuk memeriksa apakah hasilnya benar atau tidak. tombol "check result" akan melakukan loop terhadap elemen input dan mengambil setiap nilai yang ada didalamnya, kemudian dilakukan validasi dengan array result yang di generate saat pertama kali membuka page atau setiap kali menekan tombol 'reset'. Jika nilai nya sama maka variabel count akan bertambah. Jika total counter sama dengan panjang array result, maka berarti semua jawaban true/benar. dan sistem akan menampilkan pesan 'Hooray!' jika menang, atau 'come on, NOOB!' jika kalah.
5. Jika player ingin menyerah dan menampilkan hasilnya, maka player dapat menekan tombol 'show result'. tombol 'show result' ini akan melakukan loop terhadap elemen input dan mengisi setiap cell dengan value yang didapat dari variable array result. Selain itu, tombol ini akan melakukan disable terhadap tombol start.
